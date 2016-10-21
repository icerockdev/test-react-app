import React, {Component, PropTypes} from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import s from "./HomeItemWhite.css";
import Circle from "../Circle";

class HomeItemWhite extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <section className={s.section}>
                <div className={s.container}>
                    <div className={cx(s.row, 'row')}>
                        <div className="col-xs">
                            <div className={cx(s.boxRow, 'box-row')}>
                                <h3>{this.props.title}</h3>
                                <p>Feature details right here</p>
                                <p>Feature details right here</p>
                                <p>Feature details right here</p>
                            </div>
                        </div>
                        <div className="col-xs">
                            <div className={cx(s.textCenter, 'box-row')}>
                                <Circle className={s.gray}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withStyles(s)(HomeItemWhite);
