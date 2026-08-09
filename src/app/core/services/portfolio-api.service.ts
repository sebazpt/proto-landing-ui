import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, finalize, of } from 'rxjs';
import { PortfolioItem } from '../models/portfolio.model';
import { environment } from '../config/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/portfolio`;

  private readonly canonicalProjects: PortfolioItem[] = [
    {
      id: 'proto-api-springboot',
      title: 'proto-api-springboot (MVP v1.0.0)',
      description: 'Microservicio Backend Enterprise en Spring Boot 3.4.0 + Java 21 LTS con Virtual Threads, JPA H2, Autenticación JWT, CRUD de Productos y RFC 9457 ProblemDetail.',
      imageUrl: 'assets/images/portfolio/springboot.svg',
      tags: ['Spring Boot 3.4', 'Java 21 LTS', 'Virtual Threads', 'Spring Security', 'JPA'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    },
    {
      id: 'proto-api-fastapi',
      title: 'proto-api-fastapi (MVP v1.0.0)',
      description: 'API Backend en FastAPI + PostgreSQL 17 + Redis + RBAC/ABAC authorization, auditoría asíncrona JSONL y soporte WebSockets.',
      imageUrl: 'assets/images/portfolio/fastapi.svg',
      tags: ['Python', 'FastAPI', 'PostgreSQL 17', 'Redis', 'Docker'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    },
    {
      id: 'proto-admin-ui',
      title: 'proto-admin-ui (MVP v1.0.0)',
      description: 'Panel de Control Administrativo SPA desarrollado en React 19 + Vite + Tailwind CSS + Zustand state management y TanStack Query.',
      imageUrl: 'assets/images/portfolio/react.svg',
      tags: ['React 19', 'Vite', 'Tailwind CSS', 'TypeScript'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    },
    {
      id: 'proto-mobile-flutter',
      title: 'proto-mobile-flutter (v1.0.0)',
      description: 'Aplicación Móvil y Web Multiplataforma en Flutter 3.x + Dart con Clean Architecture, manejo de estado BLoC y release APK Android.',
      imageUrl: 'assets/images/portfolio/flutter.svg',
      tags: ['Flutter 3.x', 'Dart', 'Clean Architecture', 'BLoC'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    },
    {
      id: 'apiend',
      title: 'apiend (MVP v1.0.0)',
      description: 'Servicio de Inferencia ML Asíncrona y Streaming de Jobs en Python FastAPI estructurado bajo las 4 capas de Arquitectura Hexagonal.',
      imageUrl: 'assets/images/portfolio/python.svg',
      tags: ['Python', 'FastAPI', 'Hexagonal Architecture', 'ML Inference'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    },
    {
      id: 'gestop',
      title: 'gestop (SDLC Completo)',
      description: 'Ecosistema de gestión multirrepo (FastAPI + PostgreSQL 17 + React Native Expo) con 7 etapas del SDLC y 7 ADRs documentados.',
      imageUrl: 'assets/images/portfolio/gestop.svg',
      tags: ['React Native', 'FastAPI', 'PostgreSQL 17', 'Clean Architecture'],
      repositoryUrl: 'https://github.com/sebazpt/AI-LAB-ECOSYSTEM'
    }
  ];

  readonly items = signal<PortfolioItem[]>(this.canonicalProjects);
  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  readonly hasItems = computed(() => this.items().length > 0);

  getAll(): Observable<PortfolioItem[]> {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http.get<PortfolioItem[]>(this.baseUrl).pipe(
      tap(items => {
        if (items && items.length > 0) {
          this.items.set(items);
        }
      }),
      catchError(err => {
        // Fallback to canonical AiLab projects when backend service is offline
        this.items.set(this.canonicalProjects);
        return of(this.canonicalProjects);
      }),
      finalize(() => this.isLoading.set(false))
    );
  }
}
