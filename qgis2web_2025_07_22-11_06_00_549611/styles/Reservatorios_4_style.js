var size = 0;
var placement = 'point';
function categories_Reservatorios_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.07,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/AEP_RESERVOIR.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.11,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/AEP_RESERVOIR_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.15,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/AEP_RESERVOIR_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Reservatorios_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Categoria");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7999999999999998;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nome") !== null && resolution > 0 && resolution < 5) {
        labelText = String(feature.get("Nome"));
    }
    
    var style = categories_Reservatorios_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
