const styles = theme => ({

    linkMenu: {
        display: 'block',
        color: theme.background.color.white,
        fontSize: 15,
        padding: '20px 15px',
        transition: 'all 0.4s ease',
        '&:hover' : {
            color: theme.background.color.white, 
        }
    },
    menuItem: {
        marginRight:20,
        '&:hover': {
            background: theme.color.main,
        }
    },
    menuArea: {
        background: 'white'
    },
    childLink: {
       color:'#333',
        padding: 10,
        display: 'block',
        transition: 'all 0.4s ease',
        '&:hover' : {
            background: theme.color.main,
            color: theme.background.color.white,
        }
    },
    menuLinkactive: {
        display: 'block',
        background: theme.color.main,
        transition: 'all 0.4s ease',
        color: theme.background.color.white,
    },

    menuDesktop: {
        '& > li > ul > li': {
            display: 'block',
            width: 220
        }
    },

    labelDropdown: {
        position: 'relative',
        '& > span': {
            display: 'none',
            '@media (min-width: 768px)': {
                position: 'absolute',
                top: -10,
                left: 40
            },

        },
    },
    dropdownContent: {
        width:220,
        height: 0,
        overflow: 'hidden',
        transition: 'height 0.3s',
        display: 'none',
        position: 'absolute',
        zIndex: 1,
        padding:10,
        background: '#f5f5f5',
    },
    
    dropdownMenu: {
        position: 'relative',
        '&:hover': {
            background: theme.color.main,
            color: theme.background.color.white,
            '& > ul': {
                height: 'auto',
                display: 'block',
            }
        }
    }

});

export default styles;