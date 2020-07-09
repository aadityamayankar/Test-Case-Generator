import React from 'react';
import DsComponent from './DsComponent';
import {CssBaseline,Button,Grid,Menu,MenuItem,Fade,Box} from '@material-ui/core';
import {MoreVert} from '@material-ui/icons';

export default function Header(props){
  const [anchorTree, setAnchorTree] = React.useState(null);
  const [anchorGraph,setAnchorGraph] = React.useState(null);

  const openTree = Boolean(anchorTree);
  const openGraph = Boolean(anchorGraph);

  const handleTreeClick = (event) => {
    setAnchorTree(event.currentTarget);
  };

  const handleGraphClick=(event)=>{
    setAnchorGraph(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorTree(null);
    setAnchorGraph(null);
  };

  const handleClick=(n)=>{
    handleClose();
    props.handleClick(n)
  }

    if(props.ds.selectedDS===null){
        return(
          <>
                <CssBaseline/>
                <Box mb="5%">
                <Grid container justify="center" spacing={5}>
                <Grid align="center" item xs={6} sm={2}>
                  <Button variant="outlined" fullWidth aria-controls="fade-menu" aria-haspopup="true" onClick={handleGraphClick} disabled={props.ds.showResult?true:false} startIcon={<MoreVert/>}>Graph</Button>
                  <Menu
                  id="fade-graph-menu"
                  anchorE2={anchorGraph}
                  keepMounted
                  open={openGraph}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  >
                    <MenuItem onClick={()=>handleClick(5)}>Directed Weighted Graph</MenuItem>
                    <MenuItem onClick={()=>handleClick(6)}>Directed Unweighted Graph</MenuItem>
                    <MenuItem onClick={()=>handleClick(7)}>Undirected Unweighted Graph</MenuItem>
                  </Menu>
                </Grid>
                  <Grid align="center" item xs={6} sm={2}>
                  <Button variant="outlined" fullWidth className="number" onClick={()=>handleClick(0)} disabled={props.ds.showResult?true:false}>Number</Button>
                  </Grid>
                  <Grid align="center" item xs={6} sm={2}>
                  <Button variant="outlined" fullWidth className="array" onClick={()=>handleClick(1)} disabled={props.ds.showResult?true:false}>Array</Button>
                  </Grid>
                  <Grid align="center" item xs={6} sm={2}>
                  <Button variant="outlined" fullWidth className="string" onClick={()=>handleClick(2)} disabled={props.ds.showResult?true:false}>String</Button>
                  </Grid>
                  <Grid align="center" item xs={6} sm={2}>
                <Button variant="outlined" fullWidth aria-controls="fade-menu" aria-haspopup="true" onClick={handleTreeClick} disabled={props.ds.showResult?true:false} endIcon={<MoreVert/>}>Tree</Button>
                  <Menu
                  id="fade-tree-menu"
                  anchorEl={anchorTree}
                  keepMounted
                  open={openTree}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  >
                  <MenuItem onClick={()=>handleClick(3)}>Unewighted Tree</MenuItem>
                  <MenuItem onClick={()=>handleClick(4)}>Weighted Tree</MenuItem>
                  </Menu>
                  </Grid>
                </Grid>
                </Box>
            </>
        );
    }
    else{
        return(
            <div className="row">
                <DsComponent />
            </div>
        )
  }
}