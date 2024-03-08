import org.slf4j.LoggerFactory;

public class ApplicationLogger {
    //Example of singleton

    public static ApplicationLogger instance(){
        if (instance == );
    }

    //Pass in a class itself.
    //Can take in any class.
    public  ApplicationLogger forClass(Class<?> cls) throws ArgumentNullException{
        ArgumentNullException.throwIfNull(cls, "cls");
        //Creates a new instance of logger
        logger = LoggerFactory.getLogger(cls);

        return this; //Return this allows us to "chain functions"
    }

    public  ApplicationLogger forClass(String cls) throws ArgumentNullException{
        ArgumentNullException.throwIfNull(cls, "cls");
        logger = LoggerFactory.getLogger(cls);

        return this; //Return this allows us to "chain functions"
    }
}
