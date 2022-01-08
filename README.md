# ReactIlkOdev
Bu projede kullanıcının kişisel bilgilerini ve postlarını çekmek için oluşturuldu. Bunun için de axios kütüphanesinden yararlanıldı.

Bu programın çalışması için ilk başta axios kütüphanesi kurulmalıdır

`
npm i axios
`
Daha ana dosya index.js ile kullanıcının verilerini çekmek için app.js dosyası oluşturuldu.

**app.js Kodları:**

```
import axios from 'axios'  //axios kütüphanesini dahil etmek için yazıldı.

async function getData(user_id) //getData(user_id) fonksiyonu oluşturuldu.Sıralı gitmesi için başına async konur.sonra beklemesi için await kelimesi eklenir.await kelimesi önemli.eğer await yapmazsak beklemez hemen alt satırdaki koda devam eder.constu tanımlarken önüne await koymamız gerekli async tanımladığımızda yoksa promise döner.

{
    //Axios:herhangi bir veri kaynağına bağlanıyor ve veriyi alıp bize gösteriyor.axios data döner obje olarak.fetchteki json dan sonra then yerine {data} yazılır.çünkü sonuç obje döner.
    
    const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/"+user_id)  //axios ile kullanıcının verilerini alması için. {data:user} yazmak durumundayız.çünkü axios obje olarak döner.

    const {data:post}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)  //axios ile post numaralarını almsı için.

    console.log(user,post);

} 

export default getData  //index.js dosyasına dah,l etmek için dışa aktarma yapıldı.
```

**index.js Kodları:**

```
    import getData from './app.js'  //app.js dosyası import edildi.

    console.log(getData(1));  //getdata fonksiyonuna 1 parametresi verilerek id si 1 olan kullanıcıların verileri ekrana yazdırıldı.
```

**Sonucu:**

![reactodev1](https://user-images.githubusercontent.com/86554799/148622807-19bdbbab-cd42-4a91-b86a-d2463b7c0ee2.jpg)
![reactodev2](https://user-images.githubusercontent.com/86554799/148622449-fc051069-5ebd-4769-901e-653ae45225c6.jpg)




