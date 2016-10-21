import React, {PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Home.css";
import TextIcon from "../../components/TextIcon";
import HomeItemGray from "../../components/HomeItemGray";
import HomeItemWhite from "../../components/HomeItemWhite";
import HomeSignUpButton from "../../components/HomeSignUpButton";
import iphoneUrl from "./iphone-5s-spacegrey-front.jpg";
import cx from "classnames";

const title = 'IConnect';

function Home(props, context) {
    context.setTitle(title);
    return (
        <div className={s.root}>
            <section className={s.secFirst}>
                <div className="row">
                    <div className="col-xs">
                        <div className={cx(s.textCenter, 'box-row')}>
                            <div className={s.imgWrap}>
                                <img src={iphoneUrl} alt="Iphone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.secSecond}>
                <div className={cx(s.container)}>
                    <div className="row">
                        <div className="col-xs">
                            <div className={cx(s.textCenter, 'box-row')}>
                                <div className={s.circle}>
                                    <i className="fa fa fa-cubes" aria-hidden="true"></i>
                                </div>
                                <div className={s.iconBody}></div>
                            </div>
                        </div>
                        <div className="col-xs">
                            <div className={cx(s.textCenter, 'box-row')}>
                                <div className={s.circle}>
                                    <i className="fa fa fa-cube" aria-hidden="true"></i>
                                </div>
                                <div className={s.iconBody}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.secThird}>
                <div className={cx(s.container)}>
                    <div className="row">
                        <TextIcon
                            icon='fa fa-adn'
                        />
                        <TextIcon
                            icon='fa fa-truck'
                        />
                    </div>
                    <div className="row">
                        <TextIcon
                            icon='fa fa-area-chart'
                        />
                        <TextIcon
                            icon='fa fa-cube'
                        />
                        <TextIcon
                            icon='fa fa-apple'
                        />
                    </div>
                </div>
            </section>
            <HomeSignUpButton/>
            <HomeItemWhite
                title='Connected, real time.?'
            />
            <HomeItemGray
                title='Where are my users?'
            />
            <HomeItemWhite
                title='Am I meeting SLAs?'
            />
            <HomeItemGray
                title='Where are my users?'
            />
            <HomeSignUpButton/>
        </div>
    );
}

// Home.propTypes = {};
Home.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Home);
