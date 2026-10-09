const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'bw9be1av', 
  api_key: '747642435133124', 
  api_secret: 'r8kclsA_Xspv5PM6lMYo1QysHi0'
});

const uploading = async (fileBuffer)  => {
    return new Promise ((resolve, reject)=>{
        cloudinary. uploader.upload_stream({ resource_type: "auto"},
            (error, result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result.secure_url)
                }
            }
        ).end(fileBuffer)
    })
}

module.exports = {uploading}