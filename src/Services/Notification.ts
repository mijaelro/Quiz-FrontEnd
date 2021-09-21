import { Notyf } from "notyf";

class Notify{
    private notification = new Notyf({duration:2000, position:{x:"left",y:"top"}});
    public success(message: string){
        this.notification.success(message);
    };
};

const notify = new Notify();

export default notify;