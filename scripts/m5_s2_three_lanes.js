        document.addEventListener('DOMContentLoaded', function() {
            // Show lanes sequentially
            const lanes = ['designLane', 'buildLane', 'runLane'];
            lanes.forEach((laneId, index) => {
                setTimeout(() => {
                    const lane = document.getElementById(laneId);
                    if (lane) {
                        lane.classList.add('show');
                    }
                }, 1000 + (index * 500));
            });
            
            // Animate design lane activities
            const designActivities = ['designSpec', 'designConstraints', 'designSuccess', 'designFailure'];
            designActivities.forEach((activityId, index) => {
                setTimeout(() => {
                    const activity = document.getElementById(activityId);
                    if (activity) {
                        activity.classList.add('show');
                    }
                }, 1500 + (index * 200));
            });
            
            // Animate build lane activities
            const buildActivities = ['buildPrompts', 'buildPlanners', 'buildMemory', 'buildTools', 'buildTests'];
            buildActivities.forEach((activityId, index) => {
                setTimeout(() => {
                    const activity = document.getElementById(activityId);
                    if (activity) {
                        activity.classList.add('show');
                    }
                }, 2000 + (index * 200));
            });
            
            // Animate run lane activities
            const runActivities = ['runDeploy', 'runMonitor', 'runTrace', 'runIterate'];
            runActivities.forEach((activityId, index) => {
                setTimeout(() => {
                    const activity = document.getElementById(activityId);
                    if (activity) {
                        activity.classList.add('show');
                    }
                }, 2500 + (index * 200));
            });
            
            // Show flow arrows
            setTimeout(() => {
                const arrow1 = document.getElementById('arrow1');
                const arrow2 = document.getElementById('arrow2');
                if (arrow1) arrow1.classList.add('show');
                if (arrow2) arrow2.classList.add('show');
            }, 4000);
            
            // Show linear flow message
            setTimeout(() => {
                const linearFlowMessage = document.getElementById('linearFlowMessage');
                if (linearFlowMessage) {
                    linearFlowMessage.classList.add('show');
                }
            }, 5000);
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allElements = document.querySelectorAll('.show');
                allElements.forEach(element => {
                    element.classList.remove('show');
                });
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    // Show lanes sequentially
                    lanes.forEach((laneId, index) => {
                        setTimeout(() => {
                            const lane = document.getElementById(laneId);
                            if (lane) {
                                lane.classList.add('show');
                            }
                        }, 100 + (index * 500));
                    });
                    
                    // Animate design lane activities
                    designActivities.forEach((activityId, index) => {
                        setTimeout(() => {
                            const activity = document.getElementById(activityId);
                            if (activity) {
                                activity.classList.add('show');
                            }
                        }, 600 + (index * 200));
                    });
                    
                    // Animate build lane activities
                    buildActivities.forEach((activityId, index) => {
                        setTimeout(() => {
                            const activity = document.getElementById(activityId);
                            if (activity) {
                                activity.classList.add('show');
                            }
                        }, 1100 + (index * 200));
                    });
                    
                    // Animate run lane activities
                    runActivities.forEach((activityId, index) => {
                        setTimeout(() => {
                            const activity = document.getElementById(activityId);
                            if (activity) {
                                activity.classList.add('show');
                            }
                        }, 1600 + (index * 200));
                    });
                    
                    // Show flow arrows
                    setTimeout(() => {
                        const arrow1 = document.getElementById('arrow1');
                        const arrow2 = document.getElementById('arrow2');
                        if (arrow1) arrow1.classList.add('show');
                        if (arrow2) arrow2.classList.add('show');
                    }, 3100);
                    
                    // Show linear flow message
                    setTimeout(() => {
                        const linearFlowMessage = document.getElementById('linearFlowMessage');
                        if (linearFlowMessage) {
                            linearFlowMessage.classList.add('show');
                        }
                    }, 4100);
                }, 200);
            });
        });
