import {Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-neural-background',
  standalone: false,
  templateUrl: './neural-background.component.html',
  styleUrl: './neural-background.component.scss'
})
export class NeuralBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('neuralCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private width!: number;
  private height!: number;
  private particles: Particle[] = [];
  private mouseX: number = 0;
  private mouseY: number = 0;

  // Configuration
  private readonly particleCount = 60; // Updated
  private readonly connectionDistance = 150;
  private readonly mouseDistance = 200;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {
  }

  ngAfterViewInit(): void {
    if(isPlatformServer(this.platformId)) {
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.resizeCanvas();
    this.initParticles();
    this.animate();

    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  ngOnDestroy(): void {
    if(isPlatformServer(this.platformId)) {
      return;
    }

    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.animationFrameId);
  }

  private onResize = () => {
    this.resizeCanvas();
    this.initParticles(); // Re-initialize particles on resize for better distribution
  }

  private onMouseMove = (e: MouseEvent) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.width, this.height));
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach(particle => {
      particle.update(this.mouseX, this.mouseY, this.width, this.height, this.mouseDistance);
      particle.draw(this.ctx);
    });

    this.ctx.strokeStyle = 'rgba(100, 200, 255, 0.08)'; // Updated
    this.ctx.lineWidth = 1;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.5; // Updated
    this.vy = (Math.random() - 0.5) * 0.5; // Updated
    this.size = Math.random() * 2 + 1;
  }

  update(mouseX: number, mouseY: number, canvasWidth: number, canvasHeight: number, mouseDistance: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseDistance) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouseDistance - distance) / mouseDistance;
      const directionMultiplier = 0.05;
      this.vx -= forceDirectionX * force * directionMultiplier;
      this.vy -= forceDirectionY * force * directionMultiplier;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(100, 200, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
