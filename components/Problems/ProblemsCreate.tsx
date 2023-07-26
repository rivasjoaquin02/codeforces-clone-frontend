const ProblemsCreate = () => {
    return (
        <div className="problems">
            <div className="__problems-problem-info">
                {/* title difficulty */}
                <div className="box border">
                    <div className="__problems-title-difficulty">
                        {/* Title */}
                        <div>
                            <label htmlFor="problem-title">
                                <h3>Title</h3>
                            </label>
                            <input type="text" id="problem-title" />
                        </div>
                        {/* Difficulty */}
                        <div>
                            <label htmlFor="problem-difficulty">
                                <h3>Difficulty</h3>
                            </label>
                            <div id="problem-difficulty">
                                <input type="radio" value="easy" />
                                <input type="radio" value="medium" />
                                <input type="radio" value="hard" />
                            </div>
                        </div>
                    </div>
                    <div className="__problems-inout">
                        {/* input example */}
                        <label htmlFor="input-example">
                            <h3>Input Example</h3>
                        </label>
                        <input type="text" id="input-example" />
                        {/* output example */}
                        <label htmlFor="output-example">
                            <h3>Output Example</h3>
                        </label>
                        <input type="text" id="output-example" />
                    </div>
                </div>
                {/* statement */}
                <div className="box border">
                    <label htmlFor="problem-statment">
                        <h3>Problem Statement</h3>
                    </label>
                    <textarea
                        name="problem-statment"
                        id="problem-statment"
                    ></textarea>
                </div>
            </div>
            <div className="box border">
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default ProblemsCreate;
