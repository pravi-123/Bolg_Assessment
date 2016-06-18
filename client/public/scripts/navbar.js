var React=require('react');
var Link=require('react-router').Link;
var Navbar=React.createClass({
  render:function(){
    return(
      <div className={"container"}>
      <div className={'row'}>
        <div className={'col-md-12'}>
          <nav className={'navbar navbar-default navbar-inverse'} role="navigation">
            <div className={'navbar-header'}>
              <button type="button" className={'navbar-toggle'} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                 <span className={'sr-only'}>Toggle navigation</span><span className={'icon-bar'}></span><span className={'icon-bar'}></span><span className={'icon-bar'}></span>
              </button> <Link to="/" className={'navbar-brand'}><strong>Indian Cricket</strong></Link>
            </div>
            <div className={'collapse navbar-collapse'} id="bs-example-navbar-collapse-1">
              <ul className={'nav navbar-nav'}>
              <li>

                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/post">Add Post</Link>
              </li>
                </ul>

            </div>
          </nav>
        </div>
      </div>
      <div className={"row"}>
         <div className={"col-md-12"}>
            <div className={"carousel slide"} id="carousel-192739" data-ride="carousel">
               <ol className={"carousel-indicators"}>
                  <li className={"active"} data-slide-to="0" data-target="#carousel-192739">
                  </li>
                  <li data-slide-to="1" data-target="#carousel-192739">
                  </li>
                  <li data-slide-to="2" data-target="#carousel-192739">
                  </li>
               </ol>
               <div className={"carousel-inner"}>
                  <div className={"item active"}>
                     <img alt="Carousel Bootstrap First" src="img/team3.jpg"/>
                  </div>
                  <div className={"item"}>
                     <img alt="Carousel Bootstrap Second" src="img/team2.jpg"/>
                  </div>
                  <div className={"item"}>
                     <img alt="Carousel Bootstrap Third" src="img/team1.jpg"/>
                  </div>
               </div>
               <a className={"left carousel-control"} href="#carousel-192739" data-slide="prev"><span className={"glyphicon glyphicon-chevron-left"}></span></a> <a className={"right carousel-control"} href="#carousel-192739" data-slide="next"><span className={"glyphicon glyphicon-chevron-right"}></span></a>
            </div>
         </div>
      </div>
      </div>
    );
  }

});

module.exports=Navbar;
