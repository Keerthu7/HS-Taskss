import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuBar from './MenuBar';
import TaskView from './TaskView';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div className='w-full'
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      > 
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  

function TaskList() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',left:0 }}
      > 
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label=" Week 1" {...a11yProps(0)} />
          <Tab label=" Week 2" {...a11yProps(1)} />
          <Tab label=" Week 3" {...a11yProps(2)} />
          
          
        </Tabs>
        <TabPanel value={value} index={0}>
        <TaskView/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <TaskView/>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <TaskView/>
        </TabPanel>
        
      </Box></div>
    );
}

export default TaskList;