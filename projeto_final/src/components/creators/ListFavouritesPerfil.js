import React from 'react';
import '../../App.css';
import $ from "jquery";
import ProjectFavsSummary from "./ProjectFavsSummary";

class ListFavouritesPerfil extends React.Component{

    componentDidMount() {
        $('.show').click(function () { //same as on('click', function(){}); I just prefer this syntax
            let target = $(this).attr('data-target'); //this will be card1 if the first is clicked.
            $('.' + target).slideToggle('slow'); //add . for class selector and use target to find the right element
        });

        $('.close').click(function () { //close button
            $(this).parent().slideToggle('slow'); //find the nearest parent and close it
        });

        document.addEventListener('DOMContentLoaded', function() {
            const M = window.M;
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
        });

    };

    render() {
        return (
            <div>
                <div className="col-12 mb-5">
                    <span className="row">
                        {this.props.favoritos && this.props.favoritos.map(info => {
                            return(
                                <span className="col-12 col-md-6 col-lg-3 m-0 p-0">
                                    {this.props.projects && this.props.projects.map(dados => {
                                        if (info === dados.id){
                                            return (
                                                <ProjectFavsSummary info={dados}/>
                                            )
                                        }
                                    })}
                                </span>
                            )
                        })}
                    </span>
                </div>
            </div>
        );
    }

}

export default ListFavouritesPerfil;