import React, { useState, useEffect } from 'react';

import { Typography, Paper, Button, CircularProgress } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { withTheme } from '@material-ui/core/styles';
import Footer from '../../components/footer';

import Layout from '../../components/layout/layout.js';
import ProjectCard from '../../components/projectCard';
import Header from '../../components/header';

import classes from './projects.module.css';

import stores from '../../stores/index.js';
import { ERROR, GET_PROJECTS, PROJECTS_RETURNED, GAUGES_CONFIGURED } from '../../stores/constants';
import router from 'next/router';

function Projects({ changeTheme, theme }) {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(null);

  useEffect(function () {
    const projectsReturned = (projs) => {
      setProjects(projs);
      setLoading(false);
    };

    const gaugesReturned = (projs) => {
      stores.dispatcher.dispatch({ type: GET_PROJECTS, content: {} });
    };

    stores.emitter.on(PROJECTS_RETURNED, projectsReturned);
    stores.emitter.on(GAUGES_CONFIGURED, gaugesReturned);

    setLoading(true);
    stores.dispatcher.dispatch({ type: GET_PROJECTS, content: {} });

    return () => {
      stores.emitter.removeListener(PROJECTS_RETURNED, projectsReturned);
      stores.emitter.removeListener(GAUGES_CONFIGURED, gaugesReturned);
    };
  }, []);

  return (
    <Layout changeTheme={changeTheme}>
      <div className={theme.palette.type === 'dark' ? classes.containerDark : classes.container}>
        <div className={classes.copyContainer}>
          <div className={classes.copyCentered}>
            <Typography variant="h1" className={classes.chainListSpacing}>
              <span className={classes.helpingUnderline}>veRULER</span>
            </Typography>
            <Typography variant="h2" className={classes.helpingParagraph}>
              Lock RULER to earn protocol fees, collect emissions, and vote on reward gauges
            </Typography>
            <Button
              fullWidth
              disableElevation
              variant="contained"
              size="large"
              onClick={() => router.push('/project/ruler')}
              className={classes.button}
              style={{ backgroundColor: '#af2a2a', color: '#fff' }}
            >
              <Typography variant="h5">{`Open Gauge`}</Typography>
            </Button>
          </div>
        </div>
        <div className={`${theme.palette.type === 'dark' ? classes.listContainerDark : classes.listContainer} ${classes.listContainer}`}>
          <div className={`${theme.palette.type === 'dark' ? classes.headerContainerDark : classes.headerContainer} ${classes.headerContainer}`}>
            <Header changeTheme={changeTheme} />
          </div>
          {loading && (
            <div className={classes.projectsLoading}>
              <Typography variant="h5" className={classes.projectsLoadingSpace}>
                Loading
              </Typography>
              <CircularProgress size={15} />
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: '70px'
        }}
      >
        <Footer />
      </div>
    </Layout>
  );
}

export default withTheme(Projects);
