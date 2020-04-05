import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

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
    listMain: {
        textAlign: 'left',
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
        '&> select:focus' : {
            background:  theme.background.color.white
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
            textAlign:'center'
          
        },
    },
    searchType : {
        width:150,
        display:'inline'
    },
    searchForm : {
        display:'inline-block',
        width: 350,
        position:'relative',
        borderLeft:'1px solid #ececec',
        '& > input' : {
            width:330,
            height:48,
            color:'#666',
            border:'none',
            '&:focus' : {
                outline:'none'
            }
            
        },
        '& > button' : {
            width:60,
            height:50,
            background:'#333333',
            border: 'none',
            borderRadius: '0 5px 5px 0',
            position: 'absolute',
            top: -1,
            right: -58,
            transition: 'all 0.4s ease'
            
            
        },
        '& > button:hover' : {
            background: theme.color.icon
        }

    },
    iconSearch : {
        color:theme.background.color.white,
        fontSize:20
    },
    searchBar: {
   
        display: 'inline-block',
        textAlign: 'center',
        border:'1px solid #ececec',
        borderRadius: '5px',
        width:500
    },
    rightBar: {
        display: 'none',
        '@media (min-width: 768px)': {
            display: "flex",
            justifyContent: 'flex-end',
            marginTop:10
           
        },

    },
    shopping: {
        // "& > singleIcon:hover shoppingItem" : {
        //     opacity: 1,
        // }
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
        fontSize:12,
        background: theme.color.icon,
        borderRadius: '100%'
    },
    iconCart : {
        '&:hover + div' : {
            opacity: 1,
            marginTop:0
        }
    },
  
    shoppingItem: {
        // opacity: 0,
        opacity: 1,
        position: 'absolute',
        marginTop:20,
        transition: 'opacity 0.3s, margin-top 0.3s'
    },
});

export default styles;
