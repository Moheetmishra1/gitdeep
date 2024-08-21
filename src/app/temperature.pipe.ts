import { Pipe } from "@angular/core";

@Pipe({
    name:"temperaturePipe",
    standalone:  true,

})
export class TemperaturePipe{
    transform(value:string|number){
        let val:number;

        if(typeof value === "string"){
            val=parseFloat(value)
        }else{
            val = value;
        }
        let outputTem = val*(9/5) +32;
        return `${outputTem} ^F`
    }
}