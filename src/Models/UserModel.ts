class UserModel{
    public id: number;
    public fullName:string;
    public highestScore?:number;
    public email:string;
    public password:string;
    public scores?:[number];
    public token:string;
    }
    export default UserModel; 