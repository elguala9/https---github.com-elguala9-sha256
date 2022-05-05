const fs = require('fs');
import { createHash } from 'crypto';

export class Util{

    
      
    public static calculateHash(dir_images : string){

        fs.readdirSync(dir_images).forEach((file : string) => {
            var file_content = fs.readFileSync(dir_images+file);
            var hash : string = createHash('sha256').update(file_content).digest('hex');
            console.log(hash);
            this._writeHash(file , hash);
                
            
          });
    }

    private static _writeHash(file : string, hash : string){

        var stream = fs.createWriteStream("./log.txt", {flags:'a'});
        //console.log(new Date().toISOString());
        [...Array(1)].forEach( function () {
            stream.write(file + "-" + hash + "\n");
        });
        //console.log(new Date().toISOString());
        stream.end();   
    }
}