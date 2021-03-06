import axios from 'axios'  //axios kütüphanesini dahil etmek için yazıldı.

async function getData(user_id)  //getData(user_id) fonksiyonu oluşturuldu.Sıralı gitmesi için başına async konur.sonra beklemesi için await kelimesi eklenir.await kelimesi önemli.eğer await yapmazsak beklemez hemen alt satırdaki koda devam eder.constu tanımlarken önüne await koymamız gerekli async tanımladığımızda yoksa promise döner.

{ 
    //Axios:herhangi bir veri kaynağına bağlanıyor ve veriyi alıp bize gösteriyor.axios data döner obje olarak.fetchteki json dan sonra then yerine {data} yazılır.çünkü sonuç obje döner.

    const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/"+user_id)  //axios ile kullanıcının verilerini alması için. {data:user} yazmak durumundayız.çünkü axios obje olarak döner.

    const {data:post}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)  //axios ile post numaralarını almsı için.

    console.log(user,post); //Ekrana yazdırma

} 

export default getData  //index.js dosyasına dah,l etmek için dışa aktarma yapıldı.