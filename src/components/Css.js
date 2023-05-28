const StyleCss = `
/* Generall Styling */

.bl-a{
    display: block;
}
.btn{
    color: currentColor;
    text-decoration: none;
    display: inline-block;
    width: fit-content;
    

}
.btn.primary{
    color: #fff;
    background-color: #000000;
    padding: 1.2rem 1.4rem;
    margin: 14px 0px;
    border-radius: 7px;
}
.btn.secondary{
    display: block;
    padding: 1rem;
    color: #000000;
    font-weight: 800;
    text-align: center;
    width: auto;
    border: 1px solid #9e9e9e87;
}
.ctn-mx{
    max-width: 1140px;
    margin: 0px auto;
}
.not{
    display: flex;
    justify-content: center;
    gap: 2rem;
    background-color: #000000;
    color: #fff;
    padding: 10px 0px;
}
.not a{
    color: #99e3ff;
}
.not button{
    background: none;
    border: none;
}


/* header and nav */
header{
    padding: 2rem 0rem;
}
.nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav .grp{
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1.5rem;
}
.grp .logo-ctn{
    height: 27px;
}
.nav a{
    color: #6b7280;
    text-decoration: none;
}


footer{
    padding: 4rem 0rem;
}
.mob-only{
    display: none;
}

.img{
    width: 100%;
}

header{
    background-color: #fff;
}
#hamburger, #closem{
    background-color: #f9f6f1;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
}
#closem{
    float: right;
}
#closem img{
    min-height: 1rem;
}
#menu{
    padding: 3rem 2rem;
    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    left: -100%;
    transition: left 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: #fff;
}
#menu.show{
    left: 0;
}
#menu ul{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
    list-style: none;
}
#menu a{
    text-decoration: none;
    color: #6b728f;
    transition: all 0.4s;
}
nav a:hover{
    color: #9E9E9E;
}
.icon-grp{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.5;
}


/* Media styling */

@media screen and (max-width:1024px) {
    .ctn-mx{
        margin: 0px 40px;
    }
}
@media screen and (max-width: 680px){
    .ctn-mx{
        margin: 0px 20px;
    }
    .mob-only{
        display: inline-block;
    }
    .not{
        text-align: center;
        padding: 0.5rem 1.5rem;
    }
    .nav .mob-no{
        display: none;
    }
}

`
const CampgroundCss = `
/* Main Styling */
    main section:nth-child(1){
        background-color: #f9f6f1;
        padding: 4.5rem 4rem;
        margin-bottom: 4.5rem;
    }
    main .content1{
        max-width: 25rem;
        
    }

    .inp-grp{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #9E9E9E;
        border-radius: 4px;
        margin: 1rem 0rem;
    }
    .content1 form{
        display: inline-flex;
        align-items: center;
        gap: 1rem;
    }
    .content1 h1{
        margin-bottom: 0.5rem;
    }
    form .btn{
        font-size: 1em;
    }
    .bl-a{
        color: #6b728f;
    }
    .search-inp{
        font-size: 1em;
        background: none;
        border: none;
    }   


    /* Campgrounds */
    .camps{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }
    .camp-item{
        display: flex;
        flex-direction: column;
        gap: 14px;
        justify-content: center;
        border: 1px solid #9E9E9E;
        border-radius: 7px;
        padding: 16px;
    }
    .camp-item img{
        width: 100%;
        border-radius: 7px;
    }
    .camp-item div{
        border-radius: 40px;
    }
    .content1 .search-inp {
        width: 100%;
    }
    .content1 .search-inp:focus-visible{
        border: none;
        outline: none;
    }




    /* Media Styling */
    @media screen and (max-width:1024px) {
        .camps{
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
    }
    @media screen and (max-width: 680px){
        header{
            padding: 2.5rem 0rem;
        }
        .camps{
            display: flex;
            flex-direction: column;
        }
        main section:nth-child(1) {
            padding: 2rem;
        }
        form{
            flex-direction: column;
        }
        form .btn.primary{
            display: inline-block;
            width: 100%;
            margin: 0px;
            margin-bottom: 18px;
        }
    
        
        .content1 form{
            display: block;
        }
    }
`
const CampSpotCss = `
main{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
}
main .content{
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 3.5rem;
    border: 1px solid #9E9E9E87;
    border-radius: 7px;
}
.space-btw{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price{
    color: #000;
}
.comment .space-btw{
    padding-bottom: 1em;
}
.comment > .space-btw p{
    font-size: smaller;
}
.rt-ch{
    display: flex;
    justify-content: right;
}
.comm-ctn{
    margin-top: 2em;
}
.img{
    border-radius: 10px;
}
.location iframe{
    max-width: 290px;
}

@media screen and (max-width:1024px) {
    main{
        display: flex;
        flex-direction: column-reverse;
    }
    .location iframe{
        max-width: 100%;
        width: 100%;
    }
    
}
@media screen and (max-width: 680px) {
    main .content{
        padding: 2em;
    }
    .rt-ch{
        justify-content: start;
    }
}
`
const AddNewCss = `
    .inp-div{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    h1{
        margin-bottom: 1rem;
    }
    input, textarea{
        background-color: #f7f7f7;
        padding: 1em;
    }
    textarea{
        min-height: 220px;
    }
    input::placeholder, textarea::placeholder{
        color: #b4b4b4;
    }
    .form{
        display: flex;
        flex-direction: column;
        gap: 25px;
        max-width: 550px;
        margin: 0px auto;
    }
    .btn.primary{
        width: 100%;
        margin: 0px;
    }

    form{
        margin-top: 2rem;                
    }

    @media screen and (max-width: 1024px) {
        .form{
            margin: 0px 0px;
        }
    }
`
const SignCss = `
    header{
        padding: 2.2em 0rem;
    }
    .icon-grp{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5;
    }
    .space-btw{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    main{
        display: flex;
        min-height: 100vh;
    }
    .fir{
        width: 58%;
        padding: 0px 140px;
    }
    .sec{
        display: flex;
        place-items: center;
        width: 42%;
        background-color: #fff5ea;
    }
    .sec .content{
        padding: 150px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    article{
        line-height: 1.6;
        font-size: 24px;
        color: #000;
        padding-right: 1rem;
        font-weight: 700;
        word-spacing: 1px;
    }
    .sec .icon-grp{
        font-size: smaller;
        gap: 1rem;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 115px;
    }
    form p a{
        color: #2ab8ff;
        font-weight: bold;
    }



    @media screen and (max-width: 1024px) {
        main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        form{
            margin-top: 50px;
        }
        form input{
            max-width: 80%;
        }
        .fir,.sec{
            width: auto;
        }
        .fir{
            padding: 0px 50px;
        }
        .sec .content{
            padding: 50px;
        }
        article{
            padding: 0px;
        }
    }


    @media screen and (max-width: 680px) {
        .fir{
            padding: 0px 20px;
            margin-bottom: 2em;
        }
        .sec .content{
            padding: 50px 20px;
        }
        form input {
            max-width: 100%;
        }
    }
`


export {StyleCss, CampgroundCss, CampSpotCss, AddNewCss, SignCss};