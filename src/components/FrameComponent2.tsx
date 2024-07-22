import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cardParent, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.img}>
          <div className={styles.stack}>
            <div className={styles.row}>
              <div className={styles.imageIcon} />
              <div className={styles.projectUmbrella} />
              <div className={styles.rowChild} />
            </div>
            <div className={styles.stackInner}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/ellipse-59@2x.png"
                />
                <div className={styles.canYouMakeThisCodeMoreSiWrapper}>
                  <div className={styles.canYouMake}>
                    Can you make this code more simple?
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stackParent}>
              <div className={styles.stack1}>
                <div className={styles.codeResponse}>
                  <img
                    className={styles.codeResponseChild}
                    loading="lazy"
                    alt=""
                    src="/frame-1000005989@2x.png"
                  />
                  <h2 className={styles.sureHereYou}>
                    Sure! Here you go, a simpler code for your app!
                  </h2>
                </div>
                <div className={styles.stackChild}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.emptyItemParent}>
                        <div className={styles.emptyItem}>1</div>
                        <div className={styles.emptyItem1}>2</div>
                        <div className={styles.empty}>3</div>
                        <div className={styles.empty1}>4</div>
                        <div className={styles.empty2}>5</div>
                        <div className={styles.empty3}>6</div>
                        <div className={styles.empty4}>7</div>
                        <div className={styles.empty5}>8</div>
                        <div className={styles.empty6}>9</div>
                        <div className={styles.empty7}>10</div>
                        <div className={styles.empty8}>11</div>
                        <div className={styles.empty9}>12</div>
                        <div className={styles.empty10}>13</div>
                        <div className={styles.empty11}>14</div>
                        <div className={styles.empty12}>15</div>
                        <div className={styles.empty13}>16</div>
                        <div className={styles.empty14}>17</div>
                        <div className={styles.empty15}>18</div>
                        <div className={styles.empty16}>19</div>
                        <div className={styles.empty17}>20</div>
                        <div className={styles.empty18}>21</div>
                        <div className={styles.empty19}>22</div>
                        <div className={styles.empty20}>23</div>
                        <div className={styles.empty21}>24</div>
                        <div className={styles.empty22}>25</div>
                        <div className={styles.empty23}>26</div>
                        <div className={styles.empty24}>27</div>
                        <div className={styles.empty25}>28</div>
                        <div className={styles.empty26}>29</div>
                        <div className={styles.empty27}>30</div>
                        <div className={styles.empty28}>31</div>
                        <div className={styles.empty29}>32</div>
                        <div className={styles.empty30}>33</div>
                        <div className={styles.empty31}>34</div>
                        <div className={styles.empty32}>35</div>
                        <div className={styles.empty33}>36</div>
                        <div className={styles.empty34}>37</div>
                        <div className={styles.empty35}>38</div>
                        <div className={styles.empty36}>39</div>
                        <div className={styles.empty37}>40</div>
                        <div className={styles.empty38}>41</div>
                        <div className={styles.empty39}>42</div>
                      </div>
                    </div>
                    <div className={styles.importBlockWrapper}>
                      <div className={styles.importBlock}>
                        <div className={styles.importNumpyAsContainer}>
                          <span>{`import `}</span>
                          <span className={styles.numpy}>numpy</span>
                          <span>{` as `}</span>
                          <span className={styles.np}>np</span>
                        </div>
                        <div className={styles.importPandasAsContainer}>
                          <span>{`import `}</span>
                          <span className={styles.pandas}>pandas</span>
                          <span>{` as `}</span>
                          <span className={styles.pd}>pd</span>
                        </div>
                        <div className={styles.importOs}>
                          <span>{`import `}</span>
                          <span className={styles.os}>os</span>
                        </div>
                        <div className={styles.fromKerasmodelsImportContainer}>
                          <span>{`from `}</span>
                          <span
                            className={styles.kerasmodels}
                          >{`keras.models `}</span>
                          <span>import</span>
                          <span className={styles.loadModel}> load_model</span>
                        </div>
                        <div className={styles.fromWerkzeugutilsImport}>
                          from werkzeug.utils import secure_filename
                        </div>
                        <div className={styles.appFlaskNameContainer}>
                          <span>{`app `}</span>
                          <span className={styles.span}>=</span>
                          <span>{` `}</span>
                          <span className={styles.flask}>Flask</span>
                          <span>(</span>
                          <span className={styles.name}>__name__</span>
                          <span>)</span>
                        </div>
                        <div
                          className={styles.modelPathModelsnewestMoContainer}
                        >
                          <span>{`model_path `}</span>
                          <span className={styles.span1}>=</span>
                          <span>{` `}</span>
                          <span className={styles.modelsnewestModelh5}>
                            ‘models/newest-model.h5’
                          </span>
                        </div>
                        <div
                          className={styles.modelLoadModelmodelPathContainer}
                        >
                          <span>{`model `}</span>
                          <span className={styles.span2}>=</span>
                          <span>{` `}</span>
                          <span className={styles.loadModel1}>load_model</span>
                          <span>(model_path)</span>
                        </div>
                        <div className={styles.approute}>@app.route(‘/’)</div>
                        <div className={styles.approute1}>
                          <span>@</span>
                          <span className={styles.approute2}>app.route</span>
                          <span>(</span>
                          <span className={styles.span3}>‘/’</span>
                          <span>)</span>
                        </div>
                        <div className={styles.defIndex}>
                          <span className={styles.def}>def</span>
                          <span>{` `}</span>
                          <span className={styles.index1}>index</span>
                          <span>():</span>
                        </div>
                        <div className={styles.returnStatement}>
                          <div className={styles.returnRenderTemplateindex}>
                            <span className={styles.return}>return</span>
                            <span>{` `}</span>
                            <span className={styles.renderTemplate}>
                              render_template
                            </span>
                            <span>(</span>
                            <span className={styles.indexhtml}>
                              ‘index.html
                            </span>
                            <span>’)</span>
                          </div>
                        </div>
                        <div className={styles.defProcess}>def process():</div>
                        <div
                          className={styles.defModelPredictdataPathMContainer}
                        >
                          <span className={styles.def1}>def</span>
                          <span>{` `}</span>
                          <span className={styles.modelPredict}>
                            model_predict
                          </span>
                          <span>(</span>
                          <span className={styles.dataPath}>data_path</span>
                          <span>{`, `}</span>
                          <span className={styles.model}>model</span>
                          <span>):</span>
                        </div>
                        <div className={styles.dataset}>
                          <div
                            className={styles.datasetPdreadExcelmodelContainer}
                          >
                            <span>dataset</span>
                            <span className={styles.span4}>{` = `}</span>
                            <span>pd.</span>
                            <span className={styles.readExcel}>read_excel</span>
                            <span>(model_path)</span>
                          </div>
                        </div>
                        <div className={styles.numPyArray}>
                          <div className={styles.xNparraydataset}>
                            x = np.array(dataset[:])
                          </div>
                        </div>
                        <div className={styles.reshape}>
                          <div className={styles.xXreshapexshape0Container}>
                            <span>{`x `}</span>
                            <span className={styles.span5}>=</span>
                            <span> x.</span>
                            <span className={styles.reshape1}>reshape</span>
                            <span>(x.shape[0], x.shape[1], 1)</span>
                          </div>
                        </div>
                        <div className={styles.predictionResult}>
                          <div className={styles.predictModelpredictxContainer}>
                            <span>{`predict `}</span>
                            <span className={styles.span6}>=</span>
                            <span> model.</span>
                            <span className={styles.predict}>predict</span>
                            <span>(x)</span>
                          </div>
                        </div>
                        <div className={styles.returnPrediction}>
                          <div className={styles.returnPredict}>
                            <span>return</span>
                            <span className={styles.predict1}> predict</span>
                          </div>
                        </div>
                        <div className={styles.requestForm}>
                          <div className={styles.avg2Requestformavg1}>
                            avg2 = request.form[‘avg1’];
                          </div>
                        </div>
                        <div className={styles.approutepredictMethodsContainer}>
                          <span>@</span>
                          <span className={styles.approute3}>app.route</span>
                          <span>(</span>
                          <span
                            className={styles.predict2}
                          >{`‘/predict’, `}</span>
                          <span>{`methods `}</span>
                          <span className={styles.span7}>=</span>
                          <span> [</span>
                          <span className={styles.get}>‘GET’</span>
                          <span>{`, `}</span>
                          <span className={styles.post}>‘POST’</span>
                          <span>{`] `}</span>
                        </div>
                        <div className={styles.defUpload}>
                          <span className={styles.def2}>def</span>
                          <span>{` `}</span>
                          <span className={styles.upload}>upload</span>
                          <span>():</span>
                        </div>
                        <div className={styles.requestMethod}>
                          <div className={styles.ifRequestmethodContainer}>
                            <span>{`if `}</span>
                            <span
                              className={styles.requestmethod}
                            >{`request.method `}</span>
                            <span>{`== `}</span>
                            <span className={styles.post1}>‘POST’</span>
                          </div>
                        </div>
                        <div className={styles.requestFile}>
                          <div className={styles.fRequestfilesfileContainer}>
                            <span>f</span>
                            <span className={styles.span8}>{` = `}</span>
                            <span>request.files[</span>
                            <span className={styles.file}>‘file’</span>
                            <span>]</span>
                          </div>
                        </div>
                        <div className={styles.basePath}>
                          <div
                            className={styles.basepathOspathdirnameFContainer}
                          >
                            <span>{`basepath `}</span>
                            <span className={styles.span9}>=</span>
                            <span> os.path.</span>
                            <span className={styles.dirname}>dirname</span>
                            <span>(__file__)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.empty40} />
                    <button className={styles.copyAction}>
                      <input className={styles.copy06} type="checkbox" />
                      <div className={styles.copy}>Copy</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.financeIcon} />
            </div>
          </div>
        </div>
        <div className={styles.workBenefits}>
          <h1 className={styles.letAiDo}>Let AI do the work my friend</h1>
          <div className={styles.writeAPromptContainer}>
            <p className={styles.writeAPrompt}>
              Write a prompt, hit enter, and let AI do the heavy lifting.
            </p>
            <p className={styles.havingAnAi}>
              Having an AI tool built into, allows you to quickly and easily
              generate the exact code you need for your project.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.img1}>
          <div className={styles.stack2}>
            <div className={styles.row1}>
              <div className={styles.icon}>
                <img
                  className={styles.beachumbrellaIcon}
                  loading="lazy"
                  alt=""
                  src="/beachumbrella.svg"
                />
              </div>
              <h2 className={styles.projectUmbrella1}>Project Umbrella</h2>
            </div>
            <img className={styles.stackItem} alt="" src="/vector-2.svg" />
            <div className={styles.row2}>
              <div className={styles.row3}>
                <div className={styles.row4}>
                  <img
                    className={styles.rowItem}
                    alt=""
                    src="/ellipse-60@2x.png"
                  />
                  <img
                    className={styles.rowInner}
                    alt=""
                    src="/ellipse-61@2x.png"
                  />
                  <img
                    className={styles.ellipseIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-62@2x.png"
                  />
                </div>
                <div className={styles.peopleInThis}>
                  12 people in this project
                </div>
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
          <div className={styles.projectStack}>
            <div className={styles.stack3}>
              <div className={styles.row5}>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
                <h2 className={styles.financeWalletProject}>
                  Finance Wallet Project
                </h2>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
              <div className={styles.row6}>
                <div className={styles.row7}>
                  <div className={styles.row8}>
                    <img
                      className={styles.rowChild1}
                      alt=""
                      src="/ellipse-60-1@2x.png"
                    />
                    <img
                      className={styles.rowChild2}
                      alt=""
                      src="/ellipse-61-1@2x.png"
                    />
                    <img
                      className={styles.rowChild3}
                      alt=""
                      src="/ellipse-62-1@2x.png"
                    />
                  </div>
                  <div className={styles.peopleInThis1}>
                    16 people in this project
                  </div>
                </div>
                <img className={styles.rowChild4} alt="" src="/group-1-1.svg" />
              </div>
            </div>
            <div className={styles.financeCard}>
              <div className={styles.stack4}>
                <div className={styles.iconTitle}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.wallet02Icon}
                        alt=""
                        src="/wallet02.svg"
                      />
                    </div>
                  </div>
                  <h2 className={styles.financeWalletProject1}>
                    Finance Wallet Project
                  </h2>
                </div>
                <img
                  className={styles.financeStatsIcon}
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.row9}>
                  <div className={styles.financeMemberList}>
                    <div className={styles.row10}>
                      <div className={styles.financeAvatarOne} />
                      <div className={styles.financeAvatarTwo} />
                      <div className={styles.financeAvatarThree} />
                    </div>
                    <div className={styles.financeProjectCount}>
                      <div className={styles.peopleInThis2}>
                        16 people in this project
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.rowChild5}
                    alt=""
                    src="/group-1-2.svg"
                  />
                </div>
              </div>
              <div className={styles.secondWorkCard} />
            </div>
          </div>
        </div>
        <div className={styles.reduceDevelopmentTimeByWorParent}>
          <h1 className={styles.reduceDevelopmentTime}>
            Reduce development time by working with your team
          </h1>
          <div className={styles.developFasterWithout}>
            Develop faster without being restricted. Work with multiple people
            on the same project at the same time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
