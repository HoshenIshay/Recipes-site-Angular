import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTime'
})
export class PipeTimePipe implements PipeTransform {

  hour:string="";
  transform(value: number): string {

    if (value>60){
      this.hour=""+Math.floor(value/60)+" שעות "+value%60+" דקות ";
    }
    else{
      this.hour=""+value+"  דקות ";
    }
    return this.hour;
  }

}
