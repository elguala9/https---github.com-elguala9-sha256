const fs = require('fs');
import { createHash } from 'crypto';

export class Util{

    
      
    public static calculateHash(dir_images : string){

        var json : any= [];

        fs.readdirSync(dir_images).forEach((file : string) => {
            var file_content = fs.readFileSync(dir_images+file);
            var hash : string = createHash('sha256').update(file_content).digest('hex');
            console.log(hash);
            
            var data = {
                image: file,
                square: hash
            }
            
            json.push(data)
                        
            });
            fs.writeFile ("./hashes.json", JSON.stringify(json), function(err : any) {
                if (err) throw err;
                console.log('complete');
            });
        }


    
}