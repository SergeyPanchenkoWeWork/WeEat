import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import withCuisines from './withCuisinesHOC';

const styles = {
    icon: {
        fontFamily: 'ef_cuisinesregular',
        fontStyle: 'normal',
    },
};

const PLACEHOLDER = ' ';

const CUISINES_ICONS = {
    chinese: {
        icon: 'D',
        color: '#86b3bb',
    },
    sushi: {
        icon: 'i',
        color: '#86b3bb',
    },
    italian: {
        icon: 'l',
        color: '#d7ac5b',
    },
    hamburger: {
        icon: 'A',
        color: '#c2ae96',
    },
    default: {
        icon: 'f',
        color: '#adaeba',
    }
};

class CuisineIcon extends React.Component {
    _getIcon(cuisine) {
        if (cuisine) {
            return CUISINES_ICONS[cuisine.name] ? CUISINES_ICONS[cuisine.name] : CUISINES_ICONS.default;
        } else {
            return {
                ...CUISINES_ICONS.default,
               icon: PLACEHOLDER,
            };
        }
    }

    render () {
        const cuisine = this.props.cuisines[this.props.cuisine];
        const icon = this._getIcon(cuisine);

        return (
            <i
                className={classnames(this.props.className, this.props.classes.icon)}
                style={{color: icon.color}}
            >
                {icon.icon}
            </i>
        );
    }
}

export default withCuisines(withStyles(styles)(CuisineIcon));