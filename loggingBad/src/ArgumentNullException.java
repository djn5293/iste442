public class ArgumentNullException extends NullPointerException{
    public static void throwIfNull(Object o, String param) throws ArgumentNullException{
        if (o==null){
            //Get the stack trace from the current thread - we know that thrown exceptions aren't going to
            //Cross threads, so we can reliably get it from there.
            //Gives us the scope of the stackTrace;
            StackTraceElement[] stackTrace = Thread.currentThread().getStackTrace();
            //Dig out the specific element containing the class name and method.
            StackTraceElement element = stackTrace[2];


            //Auto log when exception is thrown.
            ApplicationLogger.instance().forClass(element.getClassName());
            //Gives us the information needed to hunt down the cause.
            throw new ArgumentNullException(String.format(ARGUMENT_NULL_EXCEPTION, param));
        }
    }
}
