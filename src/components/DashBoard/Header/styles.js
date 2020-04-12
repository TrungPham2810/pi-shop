const styles = theme => ({
    header: {
        background: theme.background.color.white
    },
    topbar: {
        border: 'none',
        padding: "12px 0"
    },
    topLeft: {

    },
    logo: {
        position:'relative',
        zIndex:100,
        display:'inline-block'
    },
    listMain: {
        textAlign: 'left',
        padding: 0,
        "&>li": {
            fontSize: 13,
            fontWeight: 500,
            padding: 7,
            borderBottom: '1px solid #eee',

        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            "&>li": {
                borderRight: "1px solid #f0f0f0",
                borderBottom: 'none',
            },
            "&>li:first-child": {
                paddingLeft: 0
            },
            "&>li:last-child": {
                borderRight: 'none',
                paddingRight: 0
            },
        },
    },

    topRight: {
        "&>ul>li:last-child": {
            border: 'none',
        },
        [theme.breakpoints.up('lg')]: {
            float: 'right'
        },
    },

    icon: {
        display: 'none',
        color: theme.color.icon,
        fontSize: 15,
        top: 1,
        marginRight: 3,
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            display: "inline-block",
        },

    },
    link: {
        display: "inline-block",
        color: '#333',
        '&:hover, &:focus': {
            textDecoration: 'none',
            color: theme.color.icon
        }
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        fontSize: 14,
        fontFamily: 'Poppins',
        '&> select:focus': {
            background: theme.background.color.white
        }
    },
    middleInner: {
        borderTop: "1px solid #eee",
        padding: "20px 0",
    },
    searchBarTop: {
        display: 'none',
        '@media (min-width: 768px)': {
            display: 'block',
            textAlign: 'center'

        },
    },
    searchType: {
        width: '30%',
        display: 'inline'
    },
    search : {
        width: '70%',
    },
    searchForm: {
        display: 'inline-block',
        width: '100%',
        position: 'relative',
        borderLeft: '1px solid #ececec',
        '& > input': {
            width: '80%',
            height: 48,
            color: '#666',
            border: 'none',
            paddingLeft:5,
            '&:focus': {
                outline: 'none'
            }

        },
        '& > button': {
            width: '20%',
            height: 50,
            background: '#333333',
            border: 'none',
            borderRadius: '0 5px 5px 0',
            transition: 'all 0.4s ease'


        },
        '& > button:hover': {
            background: theme.color.icon
        }

    },
    iconSearch: {
        color: theme.background.color.white,
        fontSize: 20
    },
    searchBar: {

        display: 'flex',
        textAlign: 'center',
        border: '1px solid #ececec',
        borderRadius: '5px',
        width: 460,
        margin: 'auto',
        '@media (min-width: 992px)': {
            width: 500,
        },
    },
    rightBar: {
        display: 'none',
        '@media (min-width: 768px)': {
            display: "flex",
            justifyContent: 'flex-end',
            marginTop: 10

        },

    },

    singleBar: {
        marginRight: 25
    },
    singleIcon: {
        position: 'relative',
        fontSize: 20,
        color: '#333',
        '&:hover': {
            color: theme.color.icon
        }
    },
    totalCount: {
        position: 'absolute',
        top: -6,
        left: 10,
        color: theme.background.color.white,
        width: 20,
        height: 20,
        textAlign: 'center',
        lineHeight: '20px',
        fontSize: 12,
        background: theme.color.icon,
        borderRadius: '100%'
    },
    iconCart: {
        '&:hover + div': {
            opacity: 1,
            marginTop: 30
        }
    },
    shopping: {
        position: 'relative'
      
    },
    shoppingItem: {
        opacity: 0,
      
        position: 'absolute',
        marginTop: 50,
        transition: 'opacity 0.3s, margin-top 0.3s',
        width: 300,
        right: 0,
        padding: '20px 25px',
        background: '#92ef2b',
        zIndex: 99,
    },
    dropDowmCart: {
        display: 'flex',
        fontSize: 15,
        fontWeight: 700,
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottom: '1px solid #ececec',
        textTransform: 'uppercase',
        fontFamily: 'sans-serif'
    },
    shoppingList: {
        '& > li': {
            position: 'relative',
            paddingBottom: 15,
            marginBottom: 15,
            borderBottom: '1px solid #ececec',
        },
        '& >li > h4 > a ': {
            fontWeight: 600,
            fontSize: 13,
            color: '#333'
        }
    },
    cartImg: {
        float: 'right'
    },
    remove: {
        position: 'absolute',
        bottom: 15,
        border:' 1px solid #ededed',
        width: 20,
        color: '#222',
        textAlign: 'center',
        height: 20,
        fontSize: 12,
    },
    quantity: {
        paddingBottom: 15,

        fontSize: 13
    },
    total : {
        display:'flex',
        justifyContent:'space-between',
        textTransform: 'uppercase',
        fontWeight:600,
        paddingBottom:15
    },
    checkOut : {
        display:'block',
        background:'#333',
        color:theme.background.color.white,
        textAlign:'center',
        padding: '10px 20px'
    }

});

export default styles;
