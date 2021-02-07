import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'Nuestro equipo';
  subtitle = 'Los profesionales más calificado de la industria';
  name = 'Ide+Solution';

  data: any = [
    {
    name: 'jeffrey Garcia',
    abstract: 'Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod, expedita,architecto, quam sequi perspiciatis sunt praesentium commodi ducimusvel animi necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
    rol: 'Developer',
    skill: [
            {
              key: '01',
              title: 'Base de datos(MySql, SQLServer)',
              icon: 'fas fa-database',
              porcentaje: '70',
          },
          {
              key: '02',
              title: 'Lenguajes de Programación(PHP, JAVA, JS, C#)',
              icon: 'fab fa-php',
              porcentaje: '80',
          },
          {
              key: '03',
              title: 'Frameworks y Librerias js (Jquery, React, Angular)',
              icon: 'fab fa-react',
              porcentaje: '45'
          },
          {
              key: '04',
              title: 'Frameworks css (Bootstrap)',
              icon: 'fab fa-bootstrap',
              porcentaje: '98'
          },
          {
              key: '05',
              title: ' Framework Backend (Laravel y Springboot)',
              icon: 'fab fa-laravel',
              porcentaje: '70'
          },
          {
              key: '06',
              title: 'Control de versiones(GitHub, Bitbucket, GitLab)',
              icon: 'fab fa-github-alt',
              porcentaje: '60'
          },
          {
              key: '07',
              title: 'Despliegue en aws',
              icon: 'fab fa-aws',
              porcentaje: '50'
          },
      ]
    },
    {
      name: 'Rosalina capristan',
    abstract: 'Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod, expedita,architecto, quam sequi perspiciatis sunt praesentium commodi ducimusvel animi necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
      rol: 'Qa teste',
      skill: [
        {
          key: '01',
          title: 'Base de datos(MySql, SQLServer)',
          icon: 'fas fa-database',
          porcentaje: '70',
      },
      {
          key: '02',
          title: 'Lenguajes de Programación(PHP, JAVA, JS, C#)',
          icon: 'fab fa-php',
          porcentaje: '80',
      },
      {
          key: '03',
          title: 'Frameworks y Librerias js (Jquery, React, Angular)',
          icon: 'fab fa-react',
          porcentaje: '45'
      },
      {
          key: '04',
          title: 'Frameworks css (Bootstrap)',
          icon: 'fab fa-bootstrap',
          porcentaje: '98'
      },
      {
          key: '05',
          title: ' Framework Backend (Laravel y Springboot)',
          icon: 'fab fa-laravel',
          porcentaje: '70'
      },
      {
          key: '06',
          title: 'Control de versiones(GitHub, Bitbucket, GitLab)',
          icon: 'fab fa-github-alt',
          porcentaje: '60'
      },
      {
          key: '07',
          title: 'Despliegue en aws',
          icon: 'fab fa-aws',
          porcentaje: '50'
      },
  ]
      },
      {
        name: 'Giancarlos sanginez',
    abstract: 'Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni? Lorem,  necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod,orem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quod, expedita,architecto, quam sequi perspiciatis sunt praesentium commodi ducimusvel animi necessitatibus consectetur blanditiis. Iure eum impedit explicabo sed magni?',
        rol: 'Deveoper',
        skill: [
          {
            key: '01',
            title: 'Base de datos(MySql, SQLServer)',
            icon: 'fas fa-database',
            porcentaje: '70',
        },
        {
            key: '02',
            title: 'Lenguajes de Programación(PHP, JAVA, JS, C#)',
            icon: 'fab fa-php',
            porcentaje: '80',
        },
        {
            key: '03',
            title: 'Frameworks y Librerias js (Jquery, React, Angular)',
            icon: 'fab fa-react',
            porcentaje: '45'
        },
        {
            key: '04',
            title: 'Frameworks css (Bootstrap)',
            icon: 'fab fa-bootstrap',
            porcentaje: '98'
        },
        {
            key: '05',
            title: ' Framework Backend (Laravel y Springboot)',
            icon: 'fab fa-laravel',
            porcentaje: '70'
        },
        {
            key: '06',
            title: 'Control de versiones(GitHub, Bitbucket, GitLab)',
            icon: 'fab fa-github-alt',
            porcentaje: '60'
        },
        {
            key: '07',
            title: 'Despliegue en aws',
            icon: 'fab fa-aws',
            porcentaje: '50'
        },
    ]
        },
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
