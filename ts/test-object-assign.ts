
interface DataType {
    name: string;
    vender: number;
}
interface Data {
    getName(): string;
    getVender(): number;
}
class DataImpl implements Data, DataType {
    name: string = "";
    vender: number = 0;
    getName(): string {
        return this.name;
    }
    getVender(): number {
        return this.vender;
    }
}

let json = '{"name":"张三","vender":1,"extra":"这是额外字段"}';
let jsonObject = JSON.parse(json);
const dataImplGlobale = new DataImpl();

let dataImpl = Object.assign(dataImplGlobale, jsonObject);
console.log(dataImpl);