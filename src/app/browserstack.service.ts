import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
   providedIn: 'root' 
}) 
export class BrowserStackService implements HttpInterceptor{
    url = "https://login:key@api.browserstack.com/automate/plan.json"

    constructor(private http: HttpClient) {    }

    getData() {
        return this.http.get(this.url);
     }

    /*getProjects() {
        return ["proj1","proj2","proj3"];
    }*/

    getProjects(){ 
        return this.projects;
    }
    
    getPlan(){
        return this.plan;
    }

    getTests(buildId){
        return this.tests[buildId];
    }
    
    plan = {
        "automate_plan":"Automate Pro",
        "parallel_sessions_running":1,
        "team_parallel_sessions_max_allowed":10,
        "parallel_sessions_max_allowed":10,
        "queued_sessions":0,
        "queued_sessions_max_allowed":10
    };

    projects = [
        {
            id:1,
            name:"Agenda",
            builds: [
                {
                    "name":"feature--webpack-update - 2020-07-08_1453",
                    "id":28729749,
                    "numberOfTestsByStatus": {
                        passed : 13,
                        fail : 2,
                        timeout : 5,
                        running : 1,
                    }
                },
                {
                    "name":"feature-3418-add-frontend-logs - 2020-07-20_1450",
                    "id":98408385,
                    "numberOfTestsByStatus": {
                        passed : 25,
                        fail : 10,
                        timeout : 3
                    }
                },
                {
                    "name":"feature-3418-add-frontend-logs - 2020-07-20_1451",
                    "id":98408385,
                    "numberOfTestsByStatus": {
                        passed : 8,
                        fail : 1,
                    }
                },
                {
                    "name":"feature-prodAuth-iz4-mocks-and-enablerManager - 2020-07-20_0957",
                    "id":98408385,
                    "numberOfTestsByStatus": {
                        fail : 3,
                        timeout : 2,
                    }
                },
                {
                    "name":"develop - 2020-07-20_0410",
                    "id":98408385,
                    "numberOfTestsByStatus": {
                        passed : 12,
                        fail : 6,
                        timeout : 3,
                    }
                },
            ]
        },{
            id:2,
            name:"onews",
            builds: [
                {
                    "name":"feature-3012-abtest-header-juillet - 2020-07-07_1425",
                    "id":29498204,
                    "numberOfTestsByStatus": {
                        passed : 21,
                        fail : 3,
                        timeout : 4,
                        running : 1,
                    }
                },
            ]
        }
    ];

    tests = {
        "28729749": {
            "numberOfTestsByStatus": {
                passed : 13,
                fail : 2,
                timeout : 5,
                running : 1,
            },
            "tests": [
                {
                    name:"Affichage_de_la_page_ _Maison_ __Non_Connecte",
                    statut:"Réussi",
                    os:"Windows 10",
                    browser:"Chrome",
                    date:"10/07/20",
                    video:"oui (reste 6j et 4h)",
                    details:"https://automate.browserstack.com/dashboard/v2/builds/a01a7803ba5498d410167b09ff454ce060b72c16/sessions/b181fceea6d793bab2afcf2a4797b966e9ddc0ae"
                },{
                    name:"Affichage_de_la_page_ _Maison_ __Connecte",statut:"Erreur",os:"Windows 10",browser:"Firefox",date:"10/07/20",video:"oui (reste 1j et 14h)", details:"https://www.google.com"
                },{
                    name:"Affichage_de_la_page_  TV_et_Divertissement_version_prospect_  __Client_Internet_AVEC_Acceptation_des_Cookies_ _Segment_Rgulier",statut:"Timeout",os:"Mac OS X",browser:"Safari",date:"10/07/20",video:"non", details:"https://www.google.com"
                }
            ]

        },
        "98408385": {
            "numberOfTestsByStatus": {
                passed : 25,
                fail : 10,
                timeout : 3
            },
            "tests": [
                {
                    name:"Affichage_de_la_page_ _Maison_ __Non_Connecte",
                    statut:"OK",
                    os:"Windows 10",
                    browser:"Chrome",
                    date:"10/07/20",
                    video:"oui (reste 6j et 4h)",
                    details:"https://automate.browserstack.com/dashboard/v2/builds/a01a7803ba5498d410167b09ff454ce060b72c16/sessions/b181fceea6d793bab2afcf2a4797b966e9ddc0ae"
                },{
                    name:"Affichage_de_la_page_ _Maison_ __Connecte",statut:"OK",os:"Windows 10",browser:"Firefox",date:"10/07/20",video:"oui (reste 1j et 14h)", details:"https://www.google.com"
                },{
                    name:"Affichage_de_la_page_  TV_et_Divertissement_version_prospect_  __Client_Internet_AVEC_Acceptation_des_Cookies_ _Segment_Rgulier",statut:"OK",os:"Mac OS X",browser:"Safari",date:"10/07/20",video:"non", details:"https://www.google.com"
                }
            ]

        },
    }

    user = {
        admin: true
    }
}
