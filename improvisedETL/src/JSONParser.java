import java.io.*;
import java.util.LinkedList;
public class JSONParser {
    public JSONParser(String file){

    }
    public JSONParser(File file) throws IOException{
        
    }

    private String JSONtoString(File file) throws IOException{
        try{
            FileReader fr = new FileReader(file);
            
            int i; //Holds the character we are focusing on.

            
            //Iterate through each character.
            StringBuilder jsonString = new StringBuilder();
            while((i = fr.read()) != -1){
                jsonString.append((char) i);

                
            }
            //An array containing every JSON object.
            String[] strArr = String.valueOf(jsonString).split("},");

            return String.valueOf(jsonString);
        }catch(IOException e){
            throw e;
        }
    }
}
