class Globals{
};
class DevelopmentGlobals extends Globals{
    public urls = {
        questions:"http://localhost:8080/questions/",     
    };
};

class ProductionGlobals extends Globals{
    public urls = {
        questions:"/questions/",     
    };
};

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;