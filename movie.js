import React from 'react';
import axios from 'axios';

class Movie extends React.Component{
    state = {listMovie:[], error:[]}

    
    // componentDidMount(){
    //     this.getDataProduct()
    // }

    errorMsg = () => {
        if(this.state.error===[1]){
            var result=<div>
                <p>Data tidak ditemukan</p>
            </div>
        }
        return result
    }

    getDataProduct = () => {
        var tes = [1]
        var key = '&apikey=a5b43cee'
        var title = this.refs.judul.value
        axios.get('http://www.omdbapi.com/?s='+title+key)
            .then((res) => {
                this.setState({ listMovie: res.data.Search })
            })
            .catch((err) => {
            console.log(err)
            // if(this.state.listMovie!==err.data.title){
            this.setState({
                    error: [...this.state.error,tes]
                })
            // }
            }
            )
    }


    // noListFound = () => {
    //     if(this.state.listMovie!==res.data.title){
            
    //     }

    // }

    renderList = () => {
        const jsx = this.state.listMovie.map((val)=>{
            return(
                    <div className="card col-md-3 mr-5 mt-3" style={{ width: '18rem'}}>
                    <img className="card-img-top img" width="200px" src={val.Poster} alt="Movie Poster" />
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h4 className="card-text">{val.Title}</h4>
                        <p className="card-text">{val.Year}</p>
                    </div>
                </div>
            )
        })
        return jsx
    }



    render(){
        return(
            <div>
                <h1>Selamat Datang di Movie</h1>
                <input type="text" placeholder="Masukkan Judul" className="mr-3" ref="judul"/>
                <input type="button" className="btn btn-primary" value="Search" onClick={this.getDataProduct}/>

                <div className="row justify-content-center">
                
                {this.renderList()}
                {this.errorMsg()}
                </div>
            </div>
        )
    }
};


export default Movie;