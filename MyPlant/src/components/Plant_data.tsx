import React from 'react';
import {Line} from 'react-chartjs-2';

function chartData() {
  return {
    labels: ['2019-04-20 14:22:44', '2019-04-20 14:23:15', '2019-04-20 14:23:47', '2019-04-20 14:24:19', '2019-04-20 14:27:43', '2019-04-20 14:28:15', '2019-04-20 14:28:47', '2019-04-20 14:29:19', '2019-04-20 14:29:51', '2019-04-20 14:31:07', '2019-04-20 14:31:39', '2019-04-20 14:32:11', '2019-04-20 14:32:43', '2019-04-20 14:33:15', '2019-04-20 14:33:47', '2019-04-20 14:34:19', '2019-04-20 14:34:51', '2019-04-20 14:35:22', '2019-04-20 14:35:54', '2019-04-20 14:36:26', '2019-04-20 14:36:58', '2019-04-20 14:37:34', '2019-04-20 14:38:06', '2019-04-20 14:38:38', '2019-04-20 14:39:10', '2019-04-20 14:39:42', '2019-04-20 14:40:14', '2019-04-20 14:40:45', '2019-04-20 14:41:17', '2019-04-20 14:43:16', '2019-04-20 14:43:48', '2019-04-20 14:44:20', '2019-04-20 14:44:52', '2019-04-20 14:45:24', '2019-04-20 14:51:06', '2019-04-20 14:51:38', '2019-04-20 14:52:10', '2019-04-20 14:52:42', '2019-04-20 14:53:14', '2019-04-20 15:14:03', '2019-04-20 15:14:47', '2019-04-20 15:15:19', '2019-04-20 15:15:51', '2019-04-20 15:16:23', '2019-04-20 15:16:55', '2019-04-20 15:17:27', '2019-04-20 15:17:59', '2019-04-20 15:18:31', '2019-04-20 15:19:03', '2019-04-20 15:19:35', '2019-04-20 15:20:07', '2019-04-20 15:20:39', '2019-04-20 15:21:10', '2019-04-20 15:21:42', '2019-04-20 15:22:14', '2019-04-20 15:22:46', '2019-04-20 15:23:18', '2019-04-20 15:23:50', '2019-04-20 15:24:22', '2019-04-20 15:24:54', '2019-04-20 15:25:26', '2019-04-20 15:25:58', '2019-04-20 15:33:08', '2019-04-20 15:34:59', '2019-04-20 15:35:31', '2019-04-20 15:36:03', '2019-04-20 15:36:35', '2019-04-20 15:39:27', '2019-04-20 15:39:59', '2019-04-20 15:40:31', '2019-04-20 15:41:03', '2019-04-20 15:41:35', '2019-04-20 15:42:07', '2019-04-20 15:42:38', '2019-04-20 15:43:10', '2019-04-20 15:43:42', '2019-04-20 15:44:14', '2019-04-20 15:44:46', '2019-04-20 15:45:18', '2019-04-20 15:45:50', '2019-04-20 15:46:22', '2019-04-20 15:46:54', '2019-04-20 15:47:26', '2019-04-20 15:47:58', '2019-04-20 15:48:30', '2019-04-20 15:49:02', '2019-04-20 15:49:34', '2019-04-20 15:50:06', '2019-04-20 15:50:37', '2019-04-20 15:51:09', '2019-04-20 15:51:41', '2019-04-20 15:52:13', '2019-04-20 15:52:45', '2019-04-20 15:53:17', '2019-04-20 15:53:49', '2019-04-20 15:54:21', '2019-04-20 15:54:53', '2019-04-20 15:55:25', '2019-04-20 15:55:57', '2019-04-20 15:56:29', '2019-04-20 15:57:00', '2019-04-20 15:57:32', '2019-04-20 15:58:04', '2019-04-20 16:12:23', '2019-04-20 16:13:21', '2019-04-20 16:14:24', '2019-04-20 16:14:56', '2019-04-20 16:16:06', '2019-04-20 16:17:30', '2019-04-20 16:18:01', '2019-04-20 16:20:37', '2019-04-20 16:21:09', '2019-04-20 16:21:41', '2019-04-20 16:28:09', '2019-04-20 16:28:41', '2019-04-20 16:29:13', '2019-04-20 16:29:46', '2019-04-20 16:30:18', '2019-04-20 16:30:50', '2019-04-20 16:31:22', '2019-04-20 16:31:54', '2019-04-20 16:32:26', '2019-04-20 16:32:58', '2019-04-20 16:33:29', '2019-04-20 16:34:01', '2019-04-20 16:34:33', '2019-04-20 16:35:05', '2019-04-20 16:35:37', '2019-04-20 16:36:09', ],
    datasets: [
    {
      label: 'Humidity Level (%)',
      fill:false,
      borderColor: 'rgb(115, 156, 155)',
      data: [71, 73, 71, 71, 71, 70, 72, 70, 70, 70, 72, 69, 72, 72, 73, 72, 72, 73, 70, 72, 72, 71, 69, 68, 72, 67, 71, 68, 67, 72, 73, 67, 71, 72, 56, 55, 55, 56, 56, 61, 60, 61, 61, 61, 61, 61, 62, 60, 59, 62, 62, 62, 61, 60, 62, 62, 61, 63, 61, 80, 68, 67, 71, 71, 70, 70, 70, 71, 71, 71, 73, 72, 71, 73, 73, 73, 73, 73, 73, 73, 73, 74, 72, 73, 72, 75, 75, 73, 75, 74, 74, 72, 72, 73, 74, 74, 75, 74, 74, 74, 73, 74, 74, 72, 74, 75, 73, 79, 71, 71, 69, 66, 64, 67, 66, 66, 67, 63, 68, 68, 67, 69, 68, 67, 74, 72, 72, 70, 68, ]
    }, 
    {
      label: 'Temperature Level (Degrees)',
      fill:false,
      borderColor: 'rgb(255, 20, 0)',
      data: [80, 80, 74, 80, 84, 85, 74, 85, 85, 80, 74, 83, 73, 76, 85, 75, 75, 74, 83, 74, 75, 75, 80, 88, 75, 89, 76, 87, 91, 77, 76, 90, 81, 75, 78, 82, 82, 78, 78, 73, 78, 73, 73, 79, 73, 73, 74, 86, 85, 73, 73, 74, 78, 85, 73, 78, 89, 388, 90, 98, 359, 391, 388, 416, 384, 373, 369, 360, 369, 363, 366, 363, 367, 367, 366, 354, 365, 364, 369, 369, 380, 367, 366, 367, 349, 368, 361, 65, 68, 66, 65, 66, 64, 360, 369, 370, 370, 372, 372, 371, 379, 382, 388, 401, 395, 394, 392, 375, 414, 62, 392, 381, 374, 351, 381, 381, 375, 378, 349, 370, 372, 375, 375, 372, 350, 371, 375, 367, 385, ]
    },
    {
      label: 'Light Level (%)',
      fill:false,
      borderColor: 'rgb(255, 255, 40)',
      data: [0, 0, 0, 0, 570, 930, 937, 417, 939, 947, 931, 902, 898, 890, 895, 883, 887, 894, 900, 896, 889, 883, 884, 878, 878, 811, 492, 879, 0, 891, 900, 919, 904, 903, 873, 881, 888, 889, 886, 886, 869, 870, 875, 930, 952, 877, 886, 888, 909, 889, 888, 891, 914, 946, 927, 448, 0, 903, 887, 193, 851, 940, 937, 941, 937, 876, 874, 860, 872, 872, 877, 872, 873, 877, 880, 881, 877, 878, 880, 874, 900, 876, 871, 869, 873, 877, 881, 0, 0, 0, 0, 0, 0, 890, 894, 889, 892, 891, 895, 894, 912, 918, 944, 970, 962, 964, 956, 941, 966, 0, 949, 919, 916, 867, 935, 919, 896, 906, 905, 898, 898, 900, 899, 893, 885, 890, 898, 894, 923, ]
    },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}

class PlantData extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: chartData()
  //   }
  // }

  render() {
    return (
      <div style={styles.graphContainer}>
        <Line data={
          chartData()
        } options={options} />
      </div>
    )
  }
}

export default PlantData;
