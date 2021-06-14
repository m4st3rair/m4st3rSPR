import React from 'react';
import CardAnime from './CardAnime';


class CardsAnime extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    id:0,
                    cardTitle:"Tengen Toppa Gurren-Lagann",
                    cardBody:"(天元突破グレンラガン Tengen Toppa Guren Ragan, 'Atraviesa el cielo Gurren Lagann') es una serie de anime, creada por Hiroyuki Imaishi en el estudio de anime Gainax (también creador de Neon Genesis Evangelion), junto Aniplex y Konami. Su emisión en TV Tokyo comenzó el 1 de abril de 2007 y finalizó el 30 de septiembre de 2007.",
                    cardImage:"https://i.pinimg.com/564x/26/f6/48/26f6484f18efa8128fe8f7edb167b7ba.jpg"
                },
                {
                    id:1,
                    cardTitle:"Made in Abyss",
                    cardBody:"(メイドインアビス Meido in Abisu) es una serie de manga escrita e ilustrada por Akihito Tsukushi. Es serializado en línea desde octubre de 2012 en el sitio Web Comic Gamma de la editora Takeshobo, y ha sido recogido en nueve volúmenes tankōbon. La productora Kinema Citrus lanzó una adaptación al anime el 7 de julio de 2017.1​ También se han estrenado dos películas recopilatorias en enero de 2019,2​ y la segunda temporada ha sido estrenada como tercera película en enero de 2020",
                    cardImage:"https://images-na.ssl-images-amazon.com/images/I/91sdkELx9sL.jpg"
                },
                {
                    id:2,
                    cardTitle:"Shingeki no Kyojin",
                    cardBody:"(進撃の巨人 Lit. 'Titán de Ataque'), también conocida en países de habla hispana como Ataque a los titanes y Ataque de los titanes,n. 1​1​ es una serie de manga japonesa escrita e ilustrada por Hajime Isayama. El manga se publicó en septiembre de 2009 en la revista Bessatsu Shōnen Magazine de la editorial Kōdansha, la cual era difundida de forma mensual, con un total de 139 capítulos hasta abril de 2021, y que concluyó su historia después de casi doce años.",
                    cardImage:"https://somoskudasai.com/wp-content/uploads/2020/12/EoeT1XGW4AAXPPG-1-scaled.jpg"
                },
                {
                    id:3,
                    cardTitle:"Parasyte",
                    cardBody:"Kiseijū (寄生獣 lit. Bestias parasitarias), también conocido como Parasyte, es una serie de manga escrita e ilustrada por Hitoshi Iwaaki. Fue publicada en la revista Afternoon de la editorial Kōdansha desde el 22 de noviembre de 1988 hasta el 23 de diciembre de 1995. El manga fue primeramente publicado en Estados Unidos por Tokyopop, luego por Del Rey Manga y finalmente por Kōdansha Comics USA. En 2014 y 2015, fue adaptado bajo la forma de dos películas en live action por los estudios Tōhō y Robot Communications en Japón.",
                    cardImage:"https://images-na.ssl-images-amazon.com/images/I/71mhz6bfM9L._AC_SY445_.jpg"
                },
                {
                    id:4,
                    cardTitle:"Kuroko no Basket",
                    cardBody:"(黒子のバスケ Kuroko no Basuke?, lit. El baloncesto de Kuroko) es una serie de manga de deportes, escrita e ilustrada por Tadatoshi Fujimaki. El manga comenzó su serialización el 8 de diciembre de 2008 en la revista Shūkan Shōnen Jump de la editorial Shūeisha, y finalizó el 29 de agosto de 2014. El 9 de octubre de 2014, se anunció que el manga continuaría en la revista Jump Next a partir del 29 de diciembre bajo el título de Kuroko's Basketball: Extra Game (黒子のバスケ EXTRA GAME?). ",
                    cardImage:"https://tupersonajefavorito.com/wp-content/uploads/2018/07/kuroko-no-basket-e1530553135684.jpg"
                },
            ] 
        }
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    {
                    this.state.data.map((cardAnime)=>{
                        return(
                            <div className="col-lg-4 col-md-6">
                                <CardAnime
                                    keyID={cardAnime.id}
                                    cardTitle={cardAnime.cardTitle}
                                    cardBody={cardAnime.cardBody}
                                    cardImage={cardAnime.cardImage}
                                ></CardAnime>

                            </div>
                        )
                        
                    })
                    }
            
                </div>
            </div>
        )
    }

}

export default CardsAnime;