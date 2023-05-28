import Footer from "./components/Footer";
import Header from "./components/Header";
import Notification from "./components/Notification";
import {StyleCss, AddNewCss} from "./components/Css";
import styled from "styled-components";

function AddComment(){
    const Page = styled.div`
        ${StyleCss}
        ${AddNewCss}
        footer{
            margin-top: 5rem;
        }
    `;
    return(
        <Page>
            <Notification />
            <div className='ctn-mx'>
                <Header />
                <main>
                    <form action="">
                        <div class="form">
                            <h1>Add New Comment</h1>
                            

                            <div class="inp-div">
                                <label for="decription">Description</label>
                                <textarea type="number" id="description" placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway"></textarea>
                            </div>
                            <input type="submit" value="Add Comment" class="btn primary"/>
                        </div>
                    </form>
                </main>

            
            <Footer />
            </div>
        </Page>
    );
}
export default AddComment;