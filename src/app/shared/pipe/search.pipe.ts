import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'searchPipe'
})
export class SearchPipe implements PipeTransform {

    transform(list: any[], searchText : string, field: string) : any [] {
        
        if (!list) return [];

        if (!searchText) return list;

        if (!field) return list;

        searchText = searchText.toLowerCase().trim();


        return list.filter(item => item[field].toLowerCase().includes(searchText));
        
    }
    
}