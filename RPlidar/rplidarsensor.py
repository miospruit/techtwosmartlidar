from rplidar import RPLidar
import eventlet
import socketio

sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio)

eventlet.wsgi.server(eventlet.listen(('192.168.11.45',5000)),app, log_output=False)

# lidar = RPLidar('/dev/ttyUSB0')

# info = lidar.get_info()
# print(info)

# health = lidar.get_health()
# print(health)

#measurment = lidar.iter_measurments()
#print(measurment)

#pylint: disable=redefined-outer-name,global-statement
@sio.event
def connect():
    sio.send('welcome', "hallo")
    print('connect ')
    
@sio.event
def disconnect(sid):
    print('disconnect ', sid)
    
@sio.event
def my_message(sid):
    sio.send(data)
    print('message ', sid)


try:
    for scan in lidar.iter_scans():
        for (_, angle, distance) in scan:
            print(angle,"  ", distance)
   
    
except KeyboardInterrupt:
    print('Stoping.')
    lidar.stop()
    

    








lidar.stop()
lidar.stop_motor()
lidar.disconnect()

