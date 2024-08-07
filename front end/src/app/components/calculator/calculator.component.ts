import { Component } from '@angular/core';
import { CalculoService } from '../../services/calculo.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultado: string | null = null;
  operaciones = ['suma', 'resta', 'multiplicacion', 'division', 'potencia', 'raiz'];
  selectedOperacion: string = 'suma';

  constructor(private calculoService: CalculoService) { }

  realizarOperacion() {
    if (this.num1 !== null && this.num2 !== null) {
      this.calculoService.realizarOperacion(this.selectedOperacion, this.num1, this.num2)
        .subscribe(response => {
          this.resultado = response.resultado;
        }, error => {
          console.error('Error en el servicio:', error); // Mostrar el error en la consola para depuración
          this.resultado = 'Error al realizar la operación';
        });
    } else {
      this.resultado = 'Por favor, ingresa ambos números';
    }
  }
}


