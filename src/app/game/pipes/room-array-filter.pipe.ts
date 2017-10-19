import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomArrayFilter'
})
export class RoomArrayFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value,"ad");
    return value
    ;
  }

}
