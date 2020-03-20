import { Component } from '@angular/core'

@Component(
  {
    selector: "diasSemana",
    templateUrl: "./diasSemana.component.html"
  }
)

export class DiasSemana {
  nombre: string = "Luis eduardo beltre";
  cursos: string[] = ["LinQ", "Ado.net", "Asp.net", "MVC", "Angular"];
  persona: object = {
    nombre: "Pepe",
    apellido: "Ramirez"
  }
  enlace: string = "https://www.google.com.do";
}

