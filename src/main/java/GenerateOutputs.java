package logging.src;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GenerateOutputs(){
    Logger logger;

    public GenerateOutputs(){
        outputInfo();
    }

    public void outputInfo(){
        System.out.println("Some info here");

        getLogger().info("This is some info");
    }
}
