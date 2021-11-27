import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTitle'
})
export class TruncateTitlePipe implements PipeTransform {

  transform(text: string, length: number = 15, suffix: string = '...'): string {

    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }

    return text;
  }
}
