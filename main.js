/**
 * Created by Ranndom on 12/18/2014.
 */

module.exports = function(events, logger)
{

    var shotsFired = 0;
    var shotsHit = 0;

    // Module loaded successfully.

    // Called whenever a line is parsed.
    events.on('parse', function(type, data)
    {
        if(data.type == 'shot_fired')
        {
            shotsFired++;

            logger.info('Hit accuracy = %d%', (shotsHit / shotsFired) * 100);
        }
        else if(type == 'shot_hit')
        {
            shotsHit++;

            logger.info('Hit accuracy = %d%', (shotsHit / shotsFired) * 100);
        }
    });

};