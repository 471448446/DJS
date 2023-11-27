interface Statist {
    /**
     * 必传字段。
     */
    eventType: string;
    extra?: Map<string, string>;
    /**
     * 
     * @returns 上传成功
     */
    uploaded?: () => void;
}

const statist1: Statist = {
    eventType: "app_open",
    extra: new Map(
        [
            ['key1', "张三"],
            ['key2', "李四"],
        ]
    )
};

const data = {
    ['event_type']: statist1.eventType
};
if (undefined != statist1.extra) {
    for (let [key, value] of statist1.extra) {
        data[key] = value;
    }
}
console.log(data);