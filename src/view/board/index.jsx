import React from "react";

import TitleBoard from "../../components/TitleBoard/index.jsx";
import BallBoard from "../../components/Ball/index.jsx";

import imgBackBoard from "../../assets/img/back-board1.jpg";
import imgBackBody from "../../assets/img/back-body.jpg";

import "./style.css";

const Board = () => {
  return (
    <main className="main" style={{backgroundImage: `url('${imgBackBoard}')`}}>
      <header className="header">
        Show de prêmios
        <span className="subtitle">Paróquia São Pedro - Mombuca/SP</span>
      </header>
      <section className="board">
        <div>
          <TitleBoard>B</TitleBoard>
          <div className="board__content">
            <BallBoard>1</BallBoard>
            <BallBoard>2</BallBoard>
            <BallBoard>3</BallBoard>
            <BallBoard>4</BallBoard>
            <BallBoard>5</BallBoard>
            <BallBoard>6</BallBoard>
            <BallBoard>7</BallBoard>
            <BallBoard>8</BallBoard>
            <BallBoard>9</BallBoard>
            <BallBoard>10</BallBoard>
            <BallBoard>11</BallBoard>
            <BallBoard>12</BallBoard>
            <BallBoard>13</BallBoard>
            <BallBoard>14</BallBoard>
            <BallBoard>15</BallBoard>
          </div>
        </div>
        <div>
          <TitleBoard>I</TitleBoard>
          <div className="board__content">
            <BallBoard>16</BallBoard>
            <BallBoard>17</BallBoard>
            <BallBoard>18</BallBoard>
            <BallBoard>19</BallBoard>
            <BallBoard>20</BallBoard>
            <BallBoard>21</BallBoard>
            <BallBoard>22</BallBoard>
            <BallBoard>23</BallBoard>
            <BallBoard>24</BallBoard>
            <BallBoard>25</BallBoard>
            <BallBoard>26</BallBoard>
            <BallBoard>27</BallBoard>
            <BallBoard>28</BallBoard>
            <BallBoard>29</BallBoard>
            <BallBoard>30</BallBoard>
          </div>
        </div>
        <div>
          <TitleBoard>N</TitleBoard>
          <div className="board__content">
            <BallBoard>31</BallBoard>
            <BallBoard>32</BallBoard>
            <BallBoard>33</BallBoard>
            <BallBoard>34</BallBoard>
            <BallBoard>35</BallBoard>
            <BallBoard>36</BallBoard>
            <BallBoard>37</BallBoard>
            <BallBoard>38</BallBoard>
            <BallBoard>39</BallBoard>
            <BallBoard>40</BallBoard>
            <BallBoard>41</BallBoard>
            <BallBoard>42</BallBoard>
            <BallBoard>43</BallBoard>
            <BallBoard>44</BallBoard>
            <BallBoard>45</BallBoard>
          </div>
        </div>
        <div>
          <TitleBoard>G</TitleBoard>
          <div className="board__content">
            <BallBoard>46</BallBoard>
            <BallBoard>47</BallBoard>
            <BallBoard>48</BallBoard>
            <BallBoard>49</BallBoard>
            <BallBoard>50</BallBoard>
            <BallBoard>51</BallBoard>
            <BallBoard>52</BallBoard>
            <BallBoard>53</BallBoard>
            <BallBoard>54</BallBoard>
            <BallBoard>55</BallBoard>
            <BallBoard>56</BallBoard>
            <BallBoard>57</BallBoard>
            <BallBoard>58</BallBoard>
            <BallBoard>59</BallBoard>
            <BallBoard>60</BallBoard>
          </div>
        </div>
        <div>
          <TitleBoard>O</TitleBoard>
          <div className="board__content">
            <BallBoard>61</BallBoard>
            <BallBoard>62</BallBoard>
            <BallBoard>63</BallBoard>
            <BallBoard>64</BallBoard>
            <BallBoard>65</BallBoard>
            <BallBoard>66</BallBoard>
            <BallBoard>67</BallBoard>
            <BallBoard>68</BallBoard>
            <BallBoard>69</BallBoard>
            <BallBoard>70</BallBoard>
            <BallBoard>71</BallBoard>
            <BallBoard>72</BallBoard>
            <BallBoard>73</BallBoard>
            <BallBoard>74</BallBoard>
            <BallBoard>75</BallBoard>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Board;