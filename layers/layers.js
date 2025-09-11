ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102332").setExtent([333101.398801, 4263158.005448, 370539.714512, 4280763.355447]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sistemasaquiferosversao20222027_2 = new ol.format.GeoJSON();
var features_Sistemasaquiferosversao20222027_2 = format_Sistemasaquiferosversao20222027_2.readFeatures(json_Sistemasaquiferosversao20222027_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Sistemasaquiferosversao20222027_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemasaquiferosversao20222027_2.addFeatures(features_Sistemasaquiferosversao20222027_2);
var lyr_Sistemasaquiferosversao20222027_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemasaquiferosversao20222027_2, 
                style: style_Sistemasaquiferosversao20222027_2,
                popuplayertitle: 'Sistemas aquiferos (versao 2022-2027)',
                interactive: true,
    title: 'Sistemas aquiferos (versao 2022-2027)<br />\
    <img src="styles/legend/Sistemasaquiferosversao20222027_2_0.png" /> CAPELO<br />\
    <img src="styles/legend/Sistemasaquiferosversao20222027_2_1.png" /> FAIAL-INTERMÉDIA1<br />\
    <img src="styles/legend/Sistemasaquiferosversao20222027_2_2.png" /> FAIAL-POUCO PROFUNDAS1<br />\
    <img src="styles/legend/Sistemasaquiferosversao20222027_2_3.png" /> VULCÃO CENTRAL<br />' });
var format_Sistemasaquiferosversao20172022_3 = new ol.format.GeoJSON();
var features_Sistemasaquiferosversao20172022_3 = format_Sistemasaquiferosversao20172022_3.readFeatures(json_Sistemasaquiferosversao20172022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Sistemasaquiferosversao20172022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemasaquiferosversao20172022_3.addFeatures(features_Sistemasaquiferosversao20172022_3);
var lyr_Sistemasaquiferosversao20172022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemasaquiferosversao20172022_3, 
                style: style_Sistemasaquiferosversao20172022_3,
                popuplayertitle: 'Sistemas aquiferos (versao 2017-2022)',
                interactive: true,
    title: 'Sistemas aquiferos (versao 2017-2022)<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_0.png" /> Caldeira<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_1.png" /> Capelo<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_2.png" /> Cedros - Castelo Branco<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_3.png" /> Flamengos - Horta<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_4.png" /> Lomba - Alto da Cruz<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_5.png" /> Pedra-pomes da Caldeira<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_6.png" /> Pedro Miguel<br />\
    <img src="styles/legend/Sistemasaquiferosversao20172022_3_7.png" /> Ribeirinha<br />' });
var format_Altimetria10m_4 = new ol.format.GeoJSON();
var features_Altimetria10m_4 = format_Altimetria10m_4.readFeatures(json_Altimetria10m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Altimetria10m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altimetria10m_4.addFeatures(features_Altimetria10m_4);
var lyr_Altimetria10m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altimetria10m_4, 
                style: style_Altimetria10m_4,
                popuplayertitle: 'Altimetria (10m)',
                interactive: false,
                title: '<img src="styles/legend/Altimetria10m_4.png" /> Altimetria (10m)'
            });
var format_PerimetroCaptaaoAgua_5 = new ol.format.GeoJSON();
var features_PerimetroCaptaaoAgua_5 = format_PerimetroCaptaaoAgua_5.readFeatures(json_PerimetroCaptaaoAgua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_PerimetroCaptaaoAgua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroCaptaaoAgua_5.addFeatures(features_PerimetroCaptaaoAgua_5);
var lyr_PerimetroCaptaaoAgua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroCaptaaoAgua_5, 
                style: style_PerimetroCaptaaoAgua_5,
                popuplayertitle: 'Perimetro Captaçao Agua',
                interactive: true,
                title: '<img src="styles/legend/PerimetroCaptaaoAgua_5.png" /> Perimetro Captaçao Agua'
            });
var format_FreguesiasGrupoCentral_6 = new ol.format.GeoJSON();
var features_FreguesiasGrupoCentral_6 = format_FreguesiasGrupoCentral_6.readFeatures(json_FreguesiasGrupoCentral_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_FreguesiasGrupoCentral_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FreguesiasGrupoCentral_6.addFeatures(features_FreguesiasGrupoCentral_6);
var lyr_FreguesiasGrupoCentral_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FreguesiasGrupoCentral_6, 
                style: style_FreguesiasGrupoCentral_6,
                popuplayertitle: 'Freguesias Grupo Central',
                interactive: true,
                title: '<img src="styles/legend/FreguesiasGrupoCentral_6.png" /> Freguesias Grupo Central'
            });
var format_Baciashidrograficas_7 = new ol.format.GeoJSON();
var features_Baciashidrograficas_7 = format_Baciashidrograficas_7.readFeatures(json_Baciashidrograficas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Baciashidrograficas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baciashidrograficas_7.addFeatures(features_Baciashidrograficas_7);
var lyr_Baciashidrograficas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baciashidrograficas_7, 
                style: style_Baciashidrograficas_7,
                popuplayertitle: 'Bacias hidrograficas',
                interactive: true,
                title: '<img src="styles/legend/Baciashidrograficas_7.png" /> Bacias hidrograficas'
            });
var format_Falhasgeologicas_8 = new ol.format.GeoJSON();
var features_Falhasgeologicas_8 = format_Falhasgeologicas_8.readFeatures(json_Falhasgeologicas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Falhasgeologicas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falhasgeologicas_8.addFeatures(features_Falhasgeologicas_8);
var lyr_Falhasgeologicas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falhasgeologicas_8, 
                style: style_Falhasgeologicas_8,
                popuplayertitle: 'Falhas geologicas',
                interactive: false,
                title: '<img src="styles/legend/Falhasgeologicas_8.png" /> Falhas geologicas'
            });
var format_Ligaesentreestruturas_9 = new ol.format.GeoJSON();
var features_Ligaesentreestruturas_9 = format_Ligaesentreestruturas_9.readFeatures(json_Ligaesentreestruturas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Ligaesentreestruturas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligaesentreestruturas_9.addFeatures(features_Ligaesentreestruturas_9);
var lyr_Ligaesentreestruturas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligaesentreestruturas_9, 
                style: style_Ligaesentreestruturas_9,
                popuplayertitle: 'Ligações entre estruturas',
                interactive: true,
    title: 'Ligações entre estruturas<br />\
    <img src="styles/legend/Ligaesentreestruturas_9_0.png" /> Furo --> Reservatorio<br />\
    <img src="styles/legend/Ligaesentreestruturas_9_1.png" /> Nascentes --> Reservatorio<br />\
    <img src="styles/legend/Ligaesentreestruturas_9_2.png" /> Alimentaçao por gravidade<br />\
    <img src="styles/legend/Ligaesentreestruturas_9_3.png" /> Alimentaçao seja por gravidade seja por bomba<br />\
    <img src="styles/legend/Ligaesentreestruturas_9_4.png" /> Alimentaçao por bomba<br />' });
var format_Outrasinfraestruturas_10 = new ol.format.GeoJSON();
var features_Outrasinfraestruturas_10 = format_Outrasinfraestruturas_10.readFeatures(json_Outrasinfraestruturas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Outrasinfraestruturas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrasinfraestruturas_10.addFeatures(features_Outrasinfraestruturas_10);
var lyr_Outrasinfraestruturas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outrasinfraestruturas_10, 
                style: style_Outrasinfraestruturas_10,
                popuplayertitle: 'Outras infra-estruturas',
                interactive: true,
                title: '<img src="styles/legend/Outrasinfraestruturas_10.png" /> Outras infra-estruturas'
            });
var format_Reservatorios_11 = new ol.format.GeoJSON();
var features_Reservatorios_11 = format_Reservatorios_11.readFeatures(json_Reservatorios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Reservatorios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatorios_11.addFeatures(features_Reservatorios_11);
var lyr_Reservatorios_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservatorios_11, 
                style: style_Reservatorios_11,
                popuplayertitle: 'Reservatorios',
                interactive: true,
    title: 'Reservatorios<br />\
    <img src="styles/legend/Reservatorios_11_0.png" /> Reservatorio pequeno<br />\
    <img src="styles/legend/Reservatorios_11_1.png" /> Reservatorio medio<br />\
    <img src="styles/legend/Reservatorios_11_2.png" /> Grande reservatorio<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_Sistemasaquiferosversao20222027_2.setVisible(false);lyr_Sistemasaquiferosversao20172022_3.setVisible(false);lyr_Altimetria10m_4.setVisible(false);lyr_PerimetroCaptaaoAgua_5.setVisible(false);lyr_FreguesiasGrupoCentral_6.setVisible(false);lyr_Baciashidrograficas_7.setVisible(false);lyr_Falhasgeologicas_8.setVisible(false);lyr_Ligaesentreestruturas_9.setVisible(false);lyr_Outrasinfraestruturas_10.setVisible(true);lyr_Reservatorios_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Sistemasaquiferosversao20222027_2,lyr_Sistemasaquiferosversao20172022_3,lyr_Altimetria10m_4,lyr_PerimetroCaptaaoAgua_5,lyr_FreguesiasGrupoCentral_6,lyr_Baciashidrograficas_7,lyr_Falhasgeologicas_8,lyr_Ligaesentreestruturas_9,lyr_Outrasinfraestruturas_10,lyr_Reservatorios_11];
lyr_Sistemasaquiferosversao20222027_2.set('fieldAliases', {'fid': 'fid', 'description': 'description', 'identifier': 'identifier', 'name': 'name', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'versionid': 'versionid', 'identifierscheme': 'identifierscheme', 'language': 'language', 'nativeness': 'nativeness', 'namestatus': 'namestatus', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'zonetype_href': 'zonetype_href', 'beginposition': 'beginposition', 'endposition': 'endposition', 'environmentaldomain_href': 'environmentaldomain_href', 'characterstring': 'characterstring', 'role_href': 'role_href', 'beginlifespanversion': 'beginlifespanversion', 'date': 'date', 'link': 'link', 'level_href': 'level_href', });
lyr_Sistemasaquiferosversao20172022_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'geologicunittype_href': 'geologicunittype_href', 'composition': 'composition', 'approximatedepth': 'approximatedepth', 'approximatethickness': 'approximatethickness', 'beginlifespanversion': 'beginlifespanversion', 'islayered': 'islayered', 'fid_2': 'fid_2', 'Massa de agua': 'Massa de agua', 'Area saliente': 'Area saliente', 'Litologia dominante': 'Litologia dominante', 'Tipo aquifero': 'Tipo aquifero', 'Características gerais': 'Características gerais', 'Caudal': 'Caudal', 'Caudal especifico (l/s*m)': 'Caudal especifico (l/s*m)', 'Transmissividade (m²/s)': 'Transmissividade (m²/s)', 'Permeabilidade (m/s)': 'Permeabilidade (m/s)', 'Recursos totais (hm3/an)': 'Recursos totais (hm3/an)', 'Facies predominantes': 'Facies predominantes', 'Condutividade (µS/cm)': 'Condutividade (µS/cm)', 'Anioes principais': 'Anioes principais', 'Catioes principais': 'Catioes principais', 'Outros dados relevantes': 'Outros dados relevantes', 'Fonte': 'Fonte', });
lyr_Altimetria10m_4.set('fieldAliases', {'ELEVATION': 'ELEVATION', 'LENGTH_MET': 'LENGTH_MET', });
lyr_PerimetroCaptaaoAgua_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'language': 'language', 'nativeness': 'nativeness', 'namestatus': 'namestatus', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'zonetype_href': 'zonetype_href', 'beginposition': 'beginposition', 'endposition': 'endposition', 'environmentaldomain_href': 'environmentaldomain_href', 'characterstring': 'characterstring', 'role_href': 'role_href', 'beginlifespanversion': 'beginlifespanversion', 'date': 'date', 'link': 'link', 'level_href': 'level_href', });
lyr_FreguesiasGrupoCentral_6.set('fieldAliases', {'DICOFRE': 'DICOFRE', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'ILHA': 'ILHA', 'FONTE_V3': 'FONTE_V3', 'AREA_V3_HA': 'AREA_V3_HA', });
lyr_Baciashidrograficas_7.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'language': 'language', 'nativeness': 'nativeness', 'namestatus': 'namestatus', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'beginlifespanversion': 'beginlifespanversion', 'localid': 'localid', 'namespace': 'namespace', 'Area': 'Area', });
lyr_Falhasgeologicas_8.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'faulttype_href': 'faulttype_href', });
lyr_Ligaesentreestruturas_9.set('fieldAliases', {'id': 'id', 'Lien': 'Lien', 'Num': 'Num', 'Type': 'Type', });
lyr_Outrasinfraestruturas_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Designaça': 'Designaça', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Contador': 'Contador', 'popup_html': 'popup_html', 'popup1': 'popup1', 'popup2': 'popup2', });
lyr_Reservatorios_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Capacidade': 'Capacidade', 'Categoria': 'Categoria', 'Cloragem': 'Cloragem', 'Contador': 'Contador', 'Comentario': 'Comentario', 'popup_html': 'popup_html', 'popup2': 'popup2', 'popup3': 'popup3', });
lyr_Sistemasaquiferosversao20222027_2.set('fieldImages', {'fid': 'TextEdit', 'description': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'versionid': 'TextEdit', 'identifierscheme': 'TextEdit', 'language': 'TextEdit', 'nativeness': 'TextEdit', 'namestatus': 'TextEdit', 'sourceofname': 'TextEdit', 'pronunciation': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'zonetype_href': 'TextEdit', 'beginposition': 'Range', 'endposition': 'Range', 'environmentaldomain_href': 'TextEdit', 'characterstring': 'TextEdit', 'role_href': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'date': 'TextEdit', 'link': 'TextEdit', 'level_href': 'TextEdit', });
lyr_Sistemasaquiferosversao20172022_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'geologichistory': 'TextEdit', 'geologicunittype_href': 'TextEdit', 'composition': 'TextEdit', 'approximatedepth': 'TextEdit', 'approximatethickness': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'islayered': 'TextEdit', 'fid_2': 'TextEdit', 'Massa de agua': 'TextEdit', 'Area saliente': 'TextEdit', 'Litologia dominante': 'TextEdit', 'Tipo aquifero': 'TextEdit', 'Características gerais': 'TextEdit', 'Caudal': 'TextEdit', 'Caudal especifico (l/s*m)': 'TextEdit', 'Transmissividade (m²/s)': 'TextEdit', 'Permeabilidade (m/s)': 'TextEdit', 'Recursos totais (hm3/an)': 'TextEdit', 'Facies predominantes': 'TextEdit', 'Condutividade (µS/cm)': 'TextEdit', 'Anioes principais': 'TextEdit', 'Catioes principais': 'TextEdit', 'Outros dados relevantes': 'TextEdit', 'Fonte': 'TextEdit', });
lyr_Altimetria10m_4.set('fieldImages', {'ELEVATION': 'TextEdit', 'LENGTH_MET': 'TextEdit', });
lyr_PerimetroCaptaaoAgua_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'language': 'TextEdit', 'nativeness': 'TextEdit', 'namestatus': 'TextEdit', 'sourceofname': 'TextEdit', 'pronunciation': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'zonetype_href': 'TextEdit', 'beginposition': 'Range', 'endposition': 'Range', 'environmentaldomain_href': 'TextEdit', 'characterstring': 'TextEdit', 'role_href': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'date': 'TextEdit', 'link': 'TextEdit', 'level_href': 'TextEdit', });
lyr_FreguesiasGrupoCentral_6.set('fieldImages', {'DICOFRE': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'ILHA': 'TextEdit', 'FONTE_V3': 'TextEdit', 'AREA_V3_HA': 'TextEdit', });
lyr_Baciashidrograficas_7.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'language': 'TextEdit', 'nativeness': 'TextEdit', 'namestatus': 'TextEdit', 'sourceofname': 'TextEdit', 'pronunciation': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'Area': 'TextEdit', });
lyr_Falhasgeologicas_8.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'geologichistory': 'TextEdit', 'faulttype_href': 'TextEdit', });
lyr_Ligaesentreestruturas_9.set('fieldImages', {'id': 'TextEdit', 'Lien': 'TextEdit', 'Num': 'TextEdit', 'Type': 'TextEdit', });
lyr_Outrasinfraestruturas_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Designaça': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Contador': 'CheckBox', 'popup_html': 'TextEdit', 'popup1': 'TextEdit', 'popup2': 'TextEdit', });
lyr_Reservatorios_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Capacidade': 'TextEdit', 'Categoria': 'TextEdit', 'Cloragem': 'CheckBox', 'Contador': 'CheckBox', 'Comentario': 'TextEdit', 'popup_html': 'TextEdit', 'popup2': 'TextEdit', 'popup3': 'TextEdit', });
lyr_Sistemasaquiferosversao20222027_2.set('fieldLabels', {'fid': 'hidden field', 'description': 'hidden field', 'identifier': 'hidden field', 'name': 'inline label - visible with data', 'gml_id': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'versionid': 'hidden field', 'identifierscheme': 'hidden field', 'language': 'hidden field', 'nativeness': 'hidden field', 'namestatus': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'inline label - visible with data', 'script': 'hidden field', 'zonetype_href': 'hidden field', 'beginposition': 'hidden field', 'endposition': 'hidden field', 'environmentaldomain_href': 'hidden field', 'characterstring': 'hidden field', 'role_href': 'hidden field', 'beginlifespanversion': 'hidden field', 'date': 'hidden field', 'link': 'hidden field', 'level_href': 'hidden field', });
lyr_Sistemasaquiferosversao20172022_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'gml_id': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'geologichistory': 'hidden field', 'geologicunittype_href': 'hidden field', 'composition': 'hidden field', 'approximatedepth': 'hidden field', 'approximatethickness': 'hidden field', 'beginlifespanversion': 'hidden field', 'islayered': 'hidden field', 'fid_2': 'hidden field', 'Massa de agua': 'hidden field', 'Area saliente': 'inline label - visible with data', 'Litologia dominante': 'inline label - visible with data', 'Tipo aquifero': 'inline label - visible with data', 'Características gerais': 'inline label - visible with data', 'Caudal': 'inline label - visible with data', 'Caudal especifico (l/s*m)': 'inline label - visible with data', 'Transmissividade (m²/s)': 'inline label - visible with data', 'Permeabilidade (m/s)': 'inline label - visible with data', 'Recursos totais (hm3/an)': 'inline label - visible with data', 'Facies predominantes': 'inline label - visible with data', 'Condutividade (µS/cm)': 'inline label - visible with data', 'Anioes principais': 'inline label - visible with data', 'Catioes principais': 'inline label - visible with data', 'Outros dados relevantes': 'inline label - visible with data', 'Fonte': 'header label - visible with data', });
lyr_Altimetria10m_4.set('fieldLabels', {'ELEVATION': 'no label', 'LENGTH_MET': 'no label', });
lyr_PerimetroCaptaaoAgua_5.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'gml_id': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'language': 'hidden field', 'nativeness': 'hidden field', 'namestatus': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'inline label - visible with data', 'script': 'hidden field', 'zonetype_href': 'hidden field', 'beginposition': 'hidden field', 'endposition': 'hidden field', 'environmentaldomain_href': 'hidden field', 'characterstring': 'hidden field', 'role_href': 'hidden field', 'beginlifespanversion': 'hidden field', 'date': 'hidden field', 'link': 'hidden field', 'level_href': 'hidden field', });
lyr_FreguesiasGrupoCentral_6.set('fieldLabels', {'DICOFRE': 'hidden field', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'ILHA': 'hidden field', 'FONTE_V3': 'hidden field', 'AREA_V3_HA': 'inline label - visible with data', });
lyr_Baciashidrograficas_7.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'language': 'hidden field', 'nativeness': 'hidden field', 'namestatus': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'inline label - visible with data', 'script': 'hidden field', 'beginlifespanversion': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_Falhasgeologicas_8.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'localid': 'no label', 'namespace': 'no label', 'geologichistory': 'no label', 'faulttype_href': 'no label', });
lyr_Ligaesentreestruturas_9.set('fieldLabels', {'id': 'hidden field', 'Lien': 'inline label - visible with data', 'Num': 'hidden field', 'Type': 'inline label - visible with data', });
lyr_Outrasinfraestruturas_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Designaça': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'popup_html': 'no label', 'popup1': 'no label', 'popup2': 'no label', });
lyr_Reservatorios_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Capacidade': 'hidden field', 'Categoria': 'hidden field', 'Cloragem': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'Comentario': 'header label - visible with data', 'popup_html': 'no label', 'popup2': 'no label', 'popup3': 'no label', });
lyr_Reservatorios_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});