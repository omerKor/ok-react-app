import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."}
            </h1>
            <h5>Arkadaşlar</h5>
            {friends.map((friend)=>(                
                <div key={friend.id}>{friend.name}</div>
            ))}
            <p>
            {isLoggedIn ? `Adres: ${address.detail},${address.title}, ${address.zip}` : "Giriş Yapmadınız."}
            </p>
        </>
    );
}

 User.propTypes = {
     name:PropTypes.string.isRequired, //isRequired ile zorunlu hale getirdik
     surname:PropTypes.string.isRequired,
     isLoggedIn:PropTypes.bool.isRequired,
     age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired, //oneOfType hem number hem string olarak tanımladık
     friends:PropTypes.array,
     address:PropTypes.shape({ //shape obje/nesne olarak gönderdiğimiz propertylerde kullanıyoruz
         title:PropTypes.string,
         detail:PropTypes.string,
         zip:PropTypes.number,
     }),
 };
 User.defaultProps = { //varsayılan propertyler burada tanımlanır. Olurda ilgili alanda boş gelirse buradaki değer alınır.
    name:"İsim girilmedi",
    surname:"Soyisim girilmedi",
    age:"Yaş girilmedi",
    friends:"Arkadaş girilmedi",
    address:"Adres girilmedi",
    isLoggedIn : false,
 }
export default User;