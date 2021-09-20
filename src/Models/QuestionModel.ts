class QuestionModel{
    public id?:number;
    public category?:string;
    public question?:string;
    public questionNr?:number;
    // public optionA:string;
    // public optionB:string;
    // public optionC:string;
    public options?:[];
    public answer?:string;
    public choose?:boolean; 

    }
    export default QuestionModel; 