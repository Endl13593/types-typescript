enum StatusEnum {
    Draft,
    Scheduled,
    Published,
}
console.log(StatusEnum);

function changeStatus(status: StatusEnum) {
    console.log(status);
}
changeStatus(StatusEnum.Draft);

enum OptionsEnum {
    One = 'One',
    Two = 'Two',
    Three = 'Three',
}
console.log(OptionsEnum);

const changeOption = (option: OptionsEnum) => console.log(option);
changeOption(OptionsEnum.One);